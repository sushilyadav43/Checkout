const mongoose = require("mongoose");

const checkoutScehma = {
    holdername: String,
    cardnumber: String,
    cmonth: String,
    expireyear: String,
    cvc: String,
}

const Credit = mongoose.model("Credit",checkoutScehma );

module.exports = Credit;