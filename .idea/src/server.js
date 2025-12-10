const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test routes
app.get("/", (req, res) => {
    res.send("MyBible Application Backend is running");
})

// Use PORT form .env or defualt to 500
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});