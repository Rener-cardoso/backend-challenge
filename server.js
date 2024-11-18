require('dotenv').config();

const fastify = require('fastify')({ logger: true })

fastify.get('/restaurant-info', async (request, reply) => {
  const response = await fetch('https://cdn-dev.preoday.com/challenge/venue/9');
  const data = await response.json();

  return data;
});

fastify.get('/menu-details', async (request, reply) => {
  const response = await fetch('https://cdn-dev.preoday.com/challenge/menu');
  const data = await response.json();

  return data;
});

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await fastify.listen({ port, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();