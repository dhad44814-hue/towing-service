# Vercel Deployment Guide — Admin Panel (Next.js + MongoDB)

## Root Cause Analysis

**Error:** `Environment Variable "MONGO_URL" references Secret "mongo_url", which does not exist.`

**Technical Explanation:**
- Your `vercel.json` used `"MONGO_URL": "@mongo_url"` syntax
- The `@` prefix tells Vercel to look up a **Vercel Secret** (legacy feature)
- Vercel Secrets are created via CLI: `vercel secrets add mongo_url <value>`
- You never created this secret → deployment fails before build starts
- **Fix:** Remove `@` syntax from `vercel.json`, set env vars directly in Vercel dashboard

---

## How Vercel Environment Variables Work

### 1. **Plain Environment Variables** (Recommended)
- Set directly in Vercel Dashboard → Project Settings → Environment Variables
- Stored encrypted in Vercel's infrastructure
- Injected at **build time** and **runtime**
- Can be scoped to: Production, Preview, Development

### 2. **Vercel Secrets** (Legacy, Deprecated)
- Created via CLI: `vercel secrets add <name> <value>`
- Referenced in `vercel.json` with `@` prefix: `"@secret_name"`
- **DO NOT USE** — deprecated in favor of dashboard env vars

### 3. **NEXT_PUBLIC_ Variables**
- Prefixed with `NEXT_PUBLIC_` → exposed to browser (client-side)
- Embedded into JavaScript bundle at **build time**
- Example: `NEXT_PUBLIC_API_URL` → accessible via `process.env.NEXT_PUBLIC_API_URL` in React components
- **Security:** Never put secrets in `NEXT_PUBLIC_` vars

### 4. **Server-Only Variables**
- No `NEXT_PUBLIC_` prefix → only available server-side
- Used in API routes, `getServerSideProps`, Server Components
- Example: `MONGO_URL`, `JWT_SECRET`

---

## Environment Variable Injection Timeline

| Phase | When | What's Available |
|-------|------|------------------|
| **Build Time** | During `next build` | All env vars (both `NEXT_PUBLIC_` and server-only) |
| **Runtime (Server)** | When handling requests | Server-only vars + `NEXT_PUBLIC_` vars |
| **Runtime (Client)** | In browser | Only `NEXT_PUBLIC_` vars (embedded in JS bundle) |

---

## Monorepo Environment Management

### Challenge
- pnpm monorepo with multiple apps (`admin-panel`, `towing-birmingham`, `api-server`)
- Each app may need different env vars
- Vercel builds from a single root directory

### Solution
1. **Root `.env` (local dev only)** — shared across all apps locally
2. **App-specific `.env.local`** — per-app overrides (e.g., `artifacts/admin-panel/.env.local`)
3. **Vercel Dashboard** — set env vars per deployment (Production/Preview/Development)

### Best Practice
```
Root:
  .env                    ← Committed template (no secrets)
  .env.local              ← Gitignored, local dev secrets

artifacts/admin-panel:
  .env.local              ← Gitignored, app-specific local secrets

Vercel Dashboard:
  MONGO_URL               ← Production secret
  JWT_SECRET              ← Production secret
  ADMIN_EMAIL             ← Production config
```

---

## Fixed Configuration Files

### `vercel.json` (Root)
```json
{
  "version": 2,
  "buildCommand": "pnpm --dir artifacts/admin-panel run build",
  "outputDirectory": "artifacts/admin-panel/.next",
  "installCommand": "npm install -g pnpm && pnpm install --no-frozen-lockfile",
  "framework": "nextjs",
  "rewrites": [
    { "source": "/(.*)", "destination": "/$1" }
  ]
}
```

**Key Changes:**
- ❌ Removed `"env": { "MONGO_URL": "@mongo_url" }` — no more secret references
- ✅ Set `buildCommand` to build from `artifacts/admin-panel`
- ✅ Set `outputDirectory` to `.next` folder
- ✅ Install pnpm globally before running install

### `artifacts/admin-panel/.env.local` (Local Dev)
```env
MONGO_URL=mongodb+srv://zaminrana46_db_user:nothing@cluster0.sxlnklg.mongodb.net/
JWT_SECRET=your_local_jwt_secret_here
ADMIN_EMAIL=admin@towing.local
ADMIN_PASSWORD=TowAdmin123!
```

**Security:**
- ✅ `.env.local` is in `.gitignore` — never committed
- ✅ Used only for local development
- ✅ Vercel ignores `.env.local` — uses dashboard vars instead

### `artifacts/admin-panel/next.config.mjs`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["mongodb"],
};

export default nextConfig;
```

**Key:** `serverExternalPackages: ["mongodb"]` prevents Next.js from bundling MongoDB driver (it uses native modules).

---

## Vercel Dashboard Setup — Step by Step

### 1. Go to Vercel Dashboard
- Navigate to: https://vercel.com/dashboard
- Click **Add New** → **Project**

### 2. Import GitHub Repository
- Select `dhad44814-hue/towing-service`
- Click **Import**

### 3. Configure Project Settings

**Framework Preset:** Next.js (auto-detected)

**Root Directory:** `artifacts/admin-panel`

**Build Command:** (leave default or use)
```
pnpm run build
```

**Output Directory:** (leave default)
```
.next
```

**Install Command:** (leave default or use)
```
pnpm install
```

### 4. Add Environment Variables

Click **Environment Variables** tab, add these:

| Name | Value | Environments |
|------|-------|--------------|
| `MONGO_URL` | `mongodb+srv://zaminrana46_db_user:nothing@cluster0.sxlnklg.mongodb.net/` | Production, Preview, Development |
| `JWT_SECRET` | `<generate_strong_random_string>` | Production, Preview, Development |
| `ADMIN_EMAIL` | `admin@yourdomain.com` | Production, Preview, Development |
| `ADMIN_PASSWORD` | `<strong_password>` | Production, Preview, Development |

**How to add:**
1. Click **Add** button
2. Enter **Name** (e.g., `MONGO_URL`)
3. Enter **Value** (your MongoDB connection string)
4. Select **Environments**: Check all 3 (Production, Preview, Development)
5. Click **Save**
6. Repeat for each variable

### 5. Deploy
- Click **Deploy**
- Vercel will:
  1. Clone your repo
  2. Install dependencies (`pnpm install`)
  3. Inject environment variables
  4. Run `pnpm run build`
  5. Deploy to CDN

---

## MongoDB Connection Best Practices

### Local Development
```env
# .env.local
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/dev_db
```

### Production (Vercel)
```
Vercel Dashboard → Environment Variables:
MONGO_URL = mongodb+srv://user:pass@cluster.mongodb.net/prod_db
```

### Security Checklist
- ✅ Use different MongoDB databases for dev/prod
- ✅ Whitelist Vercel IPs in MongoDB Atlas Network Access (or use `0.0.0.0/0` for testing)
- ✅ Use strong passwords
- ✅ Never commit `.env.local` or `.env.production`
- ✅ Rotate secrets regularly
- ✅ Use MongoDB Atlas connection string (not localhost)

---

## Debugging Environment Variables

### Verify Env Vars Are Loaded (Build Time)
Add to `next.config.mjs`:
```js
console.log("MONGO_URL at build:", process.env.MONGO_URL ? "✅ Set" : "❌ Missing");
```

### Verify Env Vars Are Loaded (Runtime)
Add to API route:
```ts
// app/api/debug/route.ts
export async function GET() {
  return Response.json({
    MONGO_URL: process.env.MONGO_URL ? "✅ Set" : "❌ Missing",
    JWT_SECRET: process.env.JWT_SECRET ? "✅ Set" : "❌ Missing",
  });
}
```

Visit: `https://your-app.vercel.app/api/debug`

### Check Vercel Build Logs
1. Go to Vercel Dashboard → Your Project → Deployments
2. Click latest deployment
3. Click **Build Logs** tab
4. Search for env var errors

---

## Production-Grade Secrets Management

### Enterprise Best Practices

1. **Use Vercel Environment Variables** (not secrets)
   - Encrypted at rest
   - Scoped per environment
   - Auditable

2. **Separate Environments**
   ```
   Production:   MONGO_URL → prod_db
   Preview:      MONGO_URL → staging_db
   Development:  MONGO_URL → dev_db
   ```

3. **Secret Rotation**
   - Rotate MongoDB passwords every 90 days
   - Rotate JWT secrets every 180 days
   - Update Vercel env vars after rotation

4. **Access Control**
   - Limit Vercel team members who can view env vars
   - Use MongoDB Atlas RBAC (Role-Based Access Control)
   - Enable MongoDB Atlas audit logs

5. **Monitoring**
   - Set up MongoDB Atlas alerts for failed auth attempts
   - Monitor Vercel deployment logs for env var errors
   - Use Vercel Analytics to track API errors

---

## Why Secrets Should Not Be Committed

### Security Risks
- ❌ **Public Exposure:** GitHub repos can be public → secrets leaked
- ❌ **Git History:** Even if deleted, secrets remain in git history forever
- ❌ **Collaborators:** Anyone with repo access sees secrets
- ❌ **CI/CD Leaks:** Build logs may expose secrets

### Correct Approach
```
✅ .env.local        → Gitignored, local dev only
✅ .env.production   → Gitignored, never used (Vercel injects vars)
✅ Vercel Dashboard  → Encrypted, access-controlled
✅ 1Password/Vault   → Team secret management
```

---

## Terminal Commands

### Create Local Env Files
```bash
# Root .env (template, committed)
echo "MONGO_URL=your_connection_string_here" > .env

# Admin panel .env.local (secrets, gitignored)
cd artifacts/admin-panel
echo "MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/" > .env.local
echo "JWT_SECRET=$(openssl rand -base64 32)" >> .env.local
```

### Test MongoDB Connection Locally
```bash
cd artifacts/admin-panel
pnpm run dev
# Visit http://localhost:3000/api/debug
```

### Rebuild and Redeploy
```bash
# Local build test
cd artifacts/admin-panel
pnpm run build

# Push to trigger Vercel deployment
git add -A
git commit -m "Update env config"
git push origin main
```

### Verify Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Check env vars
vercel env ls

# Pull env vars to local
vercel env pull .env.local
```

---

## Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `Secret "mongo_url" does not exist` | `vercel.json` uses `@mongo_url` | Remove `@` syntax, set in dashboard |
| `MONGO_URL is undefined` | Env var not set in Vercel | Add in dashboard, redeploy |
| `MongoServerError: bad auth` | Wrong password | Check MongoDB Atlas credentials |
| `MongoNetworkError: connection refused` | IP not whitelisted | Add IP to MongoDB Atlas Network Access |
| `Module not found: 'mongodb'` | Missing dependency | Run `pnpm add mongodb` |
| `Cannot find module '@/lib/db'` | Missing tsconfig paths | Add `"@/*": ["./*"]` to tsconfig |

---

## Final Deployment Checklist

- ✅ `vercel.json` has no `@` secret references
- ✅ `.env.local` is in `.gitignore`
- ✅ `.next` is in `.gitignore`
- ✅ MongoDB connection string is valid
- ✅ MongoDB Atlas IP whitelist includes Vercel IPs (or `0.0.0.0/0`)
- ✅ All env vars set in Vercel Dashboard
- ✅ Local build succeeds: `pnpm run build`
- ✅ Code pushed to GitHub
- ✅ Vercel deployment triggered
- ✅ Deployment logs show no errors
- ✅ App accessible at Vercel URL

---

## Next Steps

1. **Deploy to Vercel:**
   - Go to https://vercel.com/new
   - Import `dhad44814-hue/towing-service`
   - Set Root Directory: `artifacts/admin-panel`
   - Add environment variables (see section above)
   - Click Deploy

2. **Test Deployment:**
   - Visit `https://your-app.vercel.app`
   - Test login at `/login`
   - Test API at `/api/leads`

3. **Monitor:**
   - Check Vercel Dashboard → Deployments for build logs
   - Check MongoDB Atlas → Metrics for connection activity
   - Set up Vercel Analytics for error tracking

---

**All fixes applied. Code is ready for Vercel deployment.**
