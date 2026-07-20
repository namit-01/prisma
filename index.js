import express from "express";
import router from "./routes/user.router.js";

const app = express();

app.use(express.json());
app.use("/api", router);

app.get("/", async (req, res) => {});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
