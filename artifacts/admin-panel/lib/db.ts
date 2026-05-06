import { MongoClient, Db } from "mongodb";

if (!process.env.MONGO_URL) {
  throw new Error("MONGO_URL environment variable is not set");
}

const uri = process.env.MONGO_URL;
const options = {};

let client: MongoClient;
let db: Db;

// In development, reuse the client across hot reloads (Next.js HMR)
declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, options);
  }
  client = global._mongoClient;
} else {
  client = new MongoClient(uri, options);
}

export async function getDB(): Promise<Db> {
  if (!db) {
    await client.connect();
    db = client.db("towing_service");
  }
  return db;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type Lead = {
  id: string;
  name: string;
  phone: string;
  message: string;
  date: string;
  contacted: boolean;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  keywords: string[];
};

export type CityArea = {
  id: string;
  name: string;
  slug: string;
  seoContent: string;
};

export type PageContent = {
  id: string;
  slug: string;
  title: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  schemaMarkup: string;
};

export type MediaItem = {
  id: string;
  title: string;
  url: string;
  altText: string;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function getCollection<T>(name: string) {
  const database = await getDB();
  return database.collection<T & { _id?: any }>(name);
}

// ─── Leads ────────────────────────────────────────────────────────────────────

export async function getLeads(): Promise<Lead[]> {
  const col = await getCollection<Lead>("leads");
  return col.find().sort({ date: -1 }).toArray() as unknown as Lead[];
}

export async function saveLeads(leads: Lead[]) {
  const col = await getCollection<Lead>("leads");
  await col.deleteMany({});
  if (leads.length > 0) await col.insertMany(leads as any);
}

// ─── Services ─────────────────────────────────────────────────────────────────

export async function getServices(): Promise<ServiceItem[]> {
  const col = await getCollection<ServiceItem>("services");
  return col.find().toArray() as unknown as ServiceItem[];
}

export async function saveServices(services: ServiceItem[]) {
  const col = await getCollection<ServiceItem>("services");
  await col.deleteMany({});
  if (services.length > 0) await col.insertMany(services as any);
}

// ─── Cities ───────────────────────────────────────────────────────────────────

export async function getCities(): Promise<CityArea[]> {
  const col = await getCollection<CityArea>("cities");
  return col.find().toArray() as unknown as CityArea[];
}

export async function saveCities(cities: CityArea[]) {
  const col = await getCollection<CityArea>("cities");
  await col.deleteMany({});
  if (cities.length > 0) await col.insertMany(cities as any);
}

// ─── Pages ────────────────────────────────────────────────────────────────────

export async function getPages(): Promise<PageContent[]> {
  const col = await getCollection<PageContent>("pages");
  return col.find().toArray() as unknown as PageContent[];
}

export async function savePages(pages: PageContent[]) {
  const col = await getCollection<PageContent>("pages");
  await col.deleteMany({});
  if (pages.length > 0) await col.insertMany(pages as any);
}

// ─── Media ────────────────────────────────────────────────────────────────────

export async function getMedia(): Promise<MediaItem[]> {
  const col = await getCollection<MediaItem>("media");
  return col.find().toArray() as unknown as MediaItem[];
}

export async function saveMedia(media: MediaItem[]) {
  const col = await getCollection<MediaItem>("media");
  await col.deleteMany({});
  if (media.length > 0) await col.insertMany(media as any);
}
