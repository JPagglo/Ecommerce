import express  from "express"
import dotenv from "dotenv"
import Stripe from "stripe"
import exp from "constants";

// Load Variables
dotenv.config();

// Start server
const app = express();

app.use(express.static("public"));
app.use(express.json());

// Home Route
app.get("/", (req,res) => {
    res.sendFile("index.html", {root:"public"});
});

app.listen(3000, ()=> {
    console.log("Listing on port 300");
});

