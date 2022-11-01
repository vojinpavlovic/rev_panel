const express = require('express');
const app = express();

app.use(express.static('public'))

app.listen(6969, () => 
    console.log("Listening on port 6969")
)