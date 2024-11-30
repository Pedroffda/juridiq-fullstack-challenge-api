import { FastifyInstance } from "fastify";
import { prisma } from "../../db/prisma";

export default async function deleteBook(
  app: FastifyInstance,
  options: any
): Promise<void> {
  app.delete<{ Params: { id: string } }>(
    "/books/:id",
    async (request, reply) => {
      try {
        const { id } = request.params;

        const existingBook = await prisma.book.findUnique({
          where: { id },
        });

        if (!existingBook) {
          return reply.status(404).send({ message: "Book not found" });
        }

        await prisma.book.delete({
          where: { id },
        });

        return reply.status(200).send({ message: "Book deleted successfully" });
      } catch (error) {
        console.error("Error deleting book:", error);
        return reply.status(500).send({ error: "Failed to delete the book" });
      }
    }
  );
}
