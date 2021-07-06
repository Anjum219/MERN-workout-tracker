const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9009;  // uses to parse json

// middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
