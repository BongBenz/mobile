const express = require('express');
const db = require("./util/db");
const app = express();

// const adminProductRoutes = require('./routes/products');
const customerRoute = require('./routes/customer')

app.use(express.urlencoded({extended: false}));
// app.use("/admin", adminProductRoutes);
app.use('/customer', customerRoute)

app.listen(3003);