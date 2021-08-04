require("./config/global");
require("./database");

const fastify = require("fastify")({ logger: true });

// Declare a route
const routes = require("./routes");
routes.forEach((route) => {
  const base_path = "/api/";
  /**
   * Block api call in iframe
   */
  route.onSend = (request, reply, payload, done) => {
    reply.header("X-XSS-Protection", "1; mode=block");
    done(null, payload);
  };
  //append base path
  route.url = base_path + route.url;
  fastify.route(route);
});

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

// Run the server!
fastify.listen(3000, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
