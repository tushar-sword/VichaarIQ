import Fastify from 'fastify';
import { envSchema } from '@vichaar-iq/shared';

const env = envSchema.parse(process.env);
const app = Fastify({
  logger: {
    redact: ['req.headers.authorization', 'req.headers.cookie'],
  },
});

app.get('/health', async () => ({
  status: 'ok',
  service: 'vichaar-iq-api',
  phase: 1,
}));

app.get('/ready', async (_request, reply) => {
  // Phase 1 has no external dependency that must be checked for readiness.
  return reply.send({ status: 'ready' });
});

async function start() {
  try {
    await app.listen({ host: env.API_HOST, port: env.API_PORT });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

void start();
