const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "API root",
        timestamp: new Date().toISOString()
    });
});

app.get('/status', (req, res) => {
    return res.status(200).json({
        message: "UP",
        timestamp: new Date().toISOString()
    });
});

app.get('/api/verify/:token', (req, res) => {

    // 2FA Verification/Validation Token Logic goes here

    return res.status(403).json("Invalid Token");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
