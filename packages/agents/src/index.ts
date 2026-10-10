/**
 * Phase 1 agent boundary.
 *
 * Phase 2 will add the OpenAI Agents SDK and define the Planner, Query,
 * Visualization, and Explanation agents. Query validation remains deterministic
 * application code, not an LLM-only responsibility.
 */
export type AgentTask = {
  requestId: string;
  question: string;
  databaseConnectionId: string;
};

export type AgentStage =
  | 'planning'
  | 'schema_context'
  | 'query_generation'
  | 'validation'
  | 'execution'
  | 'visualization'
  | 'explanation';
