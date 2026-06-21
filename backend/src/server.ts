import express from "express";
import { prisma } from "./lib/prisma";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const users = await prisma.user.count();

  res.json({
    message: "Streakify API Running",
    totalUsers: users,
  });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});