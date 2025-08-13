import express from "express";
import cors from "cors";
import verifyToken from "./middleware/auth.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`); 
});