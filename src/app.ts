// Import the framework and instantiate it
import Fastify from 'fastify'
import 'dotenv/config'
import fastifyCors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { timeStamp } from 'node:console';

const PORT = parseInt(process.env.PORT ?? '3000');

const fastify = Fastify({
  logger: true
})

fastify.register(fastifyCors,{
    origin: true,
    credentials: true
})

fastify.register(helmet, {
  contentSecurityPolicy: false, 
});

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { 
    message: 'E-commerce Syntax Wear API',
    version: '1.0.0',
    status: 'running'
   }
})

fastify.get('/health', async( request, reply) => {
  return {
      status: 'ok',
      timeStamp: new Date().toISOString(),
  }
})

// Run the server!
try {
  await fastify.listen({ port: PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

export default fastify;