require('dotenv').config();

const fastify = require('fastify')({ logger: true })

fastify.register(require('@fastify/cors'), {
  origin: ['http://localhost:5173', "https://frontend-challenge-jet-two.vercel.app"],
});

fastify.get('/restaurant-info', async (request, reply) => {
  const response = await fetch(`${process.env.RESTAURANT_API_URL}/challenge/venue/9`);
  const data = await response.json();

  return data;
});

fastify.get('/menu-details', async (request, reply) => {
  const response = await fetch(`${process.env.RESTAURANT_API_URL}/challenge/menu`);
  const data = await response.json();

  return data;
});

const start = async () => {
  try {
    const port = 3000;
    await fastify.listen({ port, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();