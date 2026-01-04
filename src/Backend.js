require('dotenv').config(); // 1️⃣ Loads keys from .env file
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// 2️⃣ Middleware: Enable CORS so your React app (on port 3000) can talk to this backend
app.use(cors()); 
app.use(express.json());

// 3️⃣ API Endpoint to serve keys
app.get('/api/get-api-keys', (req, res) => {
    // (Optional) Check if keys exist on server
    if (!process.env.GOOGLE_MAP_API_KEY || !process.env.GOOGLE_AI_API_KEY) {
        console.error("❌ Missing API Keys in .env file");
        return res.status(500).json({ error: "Internal Server Configuration Error" });
    }

    // Send keys to the frontend
    res.json({
        googleMapKey: process.env.GOOGLE_MAP_API_KEY,
        googleAIKey: process.env.GOOGLE_AI_API_KEY
    });
});

// 4️⃣ Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});