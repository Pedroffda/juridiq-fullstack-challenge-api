import { FastifyInstance } from "fastify";
import { prisma } from "../../db/prisma";

export default async function getAllBooks(app: FastifyInstance): Promise<void> {
  app.get("/books", async (request, reply) => {
    try {
      const { title } = request.query as { title?: string };

      let books;

      if (title) {
        books = await prisma.book.findMany({
          where: {
            title: {
              contains: title,
              mode: "insensitive",
            },
          },
        });

        if (books.length === 0) {
          return reply.status(404).send({ message: "No books found" });
        }
      } else {
        books = await prisma.book.findMany();
      }

      return reply.status(200).send(books);
    } catch (error) {
      console.error("Error fetching books:", error);
      return reply.status(500).send({ error: "Error fetching books" });
    }
  });
}
