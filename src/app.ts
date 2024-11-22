import Express from "express";
const cors = require("cors");
import indexRoute from "./routes/index";

// Initiate express
const app = Express();

// Middleware CORS pour autoriser les requêtes depuis http://localhost:4200
app.use(
  cors({
    origin: "http://localhost:4200", // Spécifiez l'origine autorisée
  })
);

// Middleware pour analyser les requêtes JSON
app.use(Express.json());

// Enregistrez vos routes
app.use("/", indexRoute);

// Catch-all endpoint
app.get("*", (req: any, res: any) => res.send("Hello World!"));

// Start the server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
