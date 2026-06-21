import express from "express";

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.json({
    message: "Streakify API Running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});