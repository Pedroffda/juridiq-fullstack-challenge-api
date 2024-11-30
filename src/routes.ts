import { BooksRoutes } from "./routes/books/@BooksRoutes";
import { app } from "./server";

export const routes = async () => {
  app.register(BooksRoutes);
};
