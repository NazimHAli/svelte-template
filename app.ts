import compression from "compression";
import express, { static as expressStatic } from "express";

import { join } from "path";
const app = express();

// set up rate limiter: maximum of five requests per minute
const RateLimit = require("express-rate-limit");
const limiter = new RateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5,
});

// apply rate limiter to all requests
app.use(limiter);

app.use(compression());
app.use(expressStatic(join(__dirname, "dist")));

app.get("/", (_req, res) => {
    res.sendFile("index.html", {
        root: join(__dirname, "dist"),
    });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

export default app;
