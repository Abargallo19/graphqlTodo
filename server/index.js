const express = require('express');
require('dotenv').config();

const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = process.env.PORT || 8000;


app.use('/graphql', graphqlHTTP({}));
app.listen(port, console.log(`Locked & loaded on port ${port}`));
console.log("Checking for breaks")
