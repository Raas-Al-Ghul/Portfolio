import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact";

dotenv.config();

const app = express();

app.use(cors( {origin: "https://itsadev.vercel.app"} ));
app.use(express.json());

app.use("/contact", contactRoute);

app.listen(3000, () => {
  console.log("Server running on 3000");
});