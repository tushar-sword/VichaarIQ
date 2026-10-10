import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import Fastify from 'fastify';

describe('health contract', () => {
  const app = Fastify();

  beforeAll(async () => {
    app.get('/health', async () => ({ status: 'ok', service: 'vichaar-iq-api', phase: 1 }));
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns an OK status payload', async () => {
    const response = await app.inject({ method: 'GET', url: '/health' });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ status: 'ok', service: 'vichaar-iq-api', phase: 1 });
  });
});
