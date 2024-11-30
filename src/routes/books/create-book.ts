import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { prisma } from "../../db/prisma";

export default async function registerBook(
  app: FastifyInstance,
  options: any
): Promise<void> {
  app.post("/books", async (request, reply) => {
    const registerBookSchema = z.object({
      title: z.string(),
      author: z.string(),
      publishedYear: z.number(),
    });

    const { title, author, publishedYear } = registerBookSchema.parse(
      request.body
    );

    const book = await prisma.book.create({
      data: {
        title,
        author,
        publishedYear,
      },
    });

    reply.status(201).send(book);
  });
}
