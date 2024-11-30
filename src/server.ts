import fastfify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

export const app = fastfify();

app.register(cors);

app.register(routes);

app.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
