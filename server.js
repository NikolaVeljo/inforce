const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('workssssssssss?');
});

app.listen(5000);