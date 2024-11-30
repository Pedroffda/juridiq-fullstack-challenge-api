import { app } from "../../server";
import registerBook from "./create-book";
import deleteBook from "./delete-book";
import getAllBooks from "./get-all-books";

export const BooksRoutes = async () => {
  app.register(registerBook);
  app.register(deleteBook);
  app.register(getAllBooks);
};
