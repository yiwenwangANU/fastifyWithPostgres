import Fastify from "fastify";

const server = Fastify({
  logger: true,
});

server.listen(
  { port: Number(process.env.PORT), host: process.env.APP_HOST },
  (err) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
    server.log.info(`Server is ready on port: ${Number(process.env.APP_PORT)}`);
  },
);
