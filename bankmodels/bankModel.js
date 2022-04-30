const mongoose = require("mongoose");

const checkoutScehma = {
    account_holder_name: String,
    account_number: String,
    bank_name: String,
    ifsc_code: String,
    cvc: String,
}

const Bank = mongoose.model("Bank",checkoutScehma );

module.exports = Bank;