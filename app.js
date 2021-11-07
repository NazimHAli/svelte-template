"use strict";

import compression from "compression";
import express, { static } from "express";
import { join } from "path";
const app = express();

app.use(compression());
app.use(static(join(__dirname, "dist")));

app.get("/", (req, res) => {
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
