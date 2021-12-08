const Customer = require("../models/customer")

exports.getAllCustomer = (req, res, next) => {
    console.log("Controller")
    Customer.fetchAll().then(customer => {
        res.status(200).json({
            data: customer[0],
            message: "success"
        })
    }).catch(err => {
        res.status(500).json({
            message: err
        })
    })
}