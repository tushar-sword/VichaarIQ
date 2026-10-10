import type { DatabaseKind, QueryResult } from '@vichaar-iq/shared';

export type SchemaSnapshot = {
  databaseKind: DatabaseKind;
  capturedAt: string;
  tablesOrCollections: Array<{
    name: string;
    fields: Array<{ name: string; dataType?: string; nullable?: boolean }>;
    relationships?: Array<{ fromField: string; toTable: string; toField: string }>;
  }>;
};

/**
 * Connector contract only. Implementations must validate operations and use
 * least-privilege, read-only credentials before executing customer queries.
 */
export interface ReadOnlyDatabaseAdapter {
  readonly kind: DatabaseKind;
  inspectSchema(): Promise<SchemaSnapshot>;
  executeValidatedRead(query: unknown): Promise<QueryResult>;
  close(): Promise<void>;
}
