import express, { type Express, type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// Configure pino-http middleware with proper typing
const httpLogger = pinoHttp({
  logger,
  serializers: {
    req: (req: Request & { id?: string }) => ({
      id: req.id,
      method: req.method,
      url: req.url?.split("?")[0],
    }),
    res: (res: Response) => ({
      statusCode: res.statusCode,
    }),
  },
});

// Apply middleware in correct order
app.use(httpLogger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint (required for Vercel)
app.get("/health", (_req: Request, res: Response): void => {
  res.status(200).json({ status: "ok" });
});

// API routes
app.use("/api", router);

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  logger.error(err, "Unhandled error");
  res.status(500).json({ error: "Internal server error" });
});

export default app;
