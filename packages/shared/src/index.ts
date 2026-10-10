import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  API_HOST: z.string().default('127.0.0.1'),
  API_PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  WEB_ORIGIN: z.string().url().default('http://localhost:3000'),
  OPENAI_API_KEY: z.string().optional(),
  OPENAI_MODEL: z.string().optional(),
  APP_DATABASE_URL: z.string().optional(),
});

export type AppEnvironment = z.infer<typeof envSchema>;

export type DatabaseKind = 'postgresql' | 'mysql' | 'sqlite' | 'mongodb';

export type QueryResult = {
  columns: Array<{ name: string; type?: string }>;
  rows: Array<Record<string, unknown>>;
  rowCount: number;
  elapsedMs: number;
};

export type ChartRecommendation = {
  type: 'bar' | 'line' | 'pie' | 'kpi' | 'table';
  xKey?: string;
  yKey?: string;
  title: string;
};

export type AnalyticsResponse = {
  question: string;
  queryPreview: string;
  result: QueryResult;
  chart: ChartRecommendation;
  explanation: string;
};
