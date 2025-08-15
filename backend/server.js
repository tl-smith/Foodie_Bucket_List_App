import express from "express";
import cors from "cors";
import verifyToken from "./middleware/auth.js";
import bucketListRouter from "./routes/bucketList.js"

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/bucket-lists", bucketListRouter);

app.get("/", (req, res) => res.send("Hello World"));

app.get("/user-profile", async (req, res) => {
    res.send("GET /user-profile In progress");
})

app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`); 
});