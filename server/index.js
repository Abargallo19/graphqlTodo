const express = require('express');
require('dotenv').config();

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();
const port = process.env.PORT || 8000;


app.use('/graphql', graphqlHTTP({
    schema, 
    graphql: process.env.NODE_ENV === 'development'
}));
app.listen(port, console.log(`Locked & loaded on port ${port}`));
console.log("Checking for breaks")
