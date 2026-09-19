const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(__dirname));

// Homepage route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Test route
app.get("/api/test", (req, res) => {
    res.json({
        message: "CINORA backend is working!"
    });
});

// Start server locally
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`CINORA backend running on port ${PORT}`);
    });
}

module.exports = app;