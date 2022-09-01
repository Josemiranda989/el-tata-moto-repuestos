const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
    console.log(`http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send("Hello World!");
})