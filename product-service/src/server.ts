import express from "express";
import userRoutes from "./presentation/routes/userRoutes";

export const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(userRoutes);
  return app;
};
