// const http = require('http');

// buat import package express
const express = require('express');

// buat instance express
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});