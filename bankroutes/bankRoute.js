const express = require("express");
const router = express.Router();
const Bank = require("../bankmodels/bankModel")



router.route("/bankTransfer").post((req, res) => {
   const account_holder_name = req.body.account_holder_name;
   const account_number =  req.body.account_number;
   const bank_name =  req.body.bank_name;
   const ifsc_code =  req.body.ifsc_code;
   const cvc =  req.body.cvc;
   const newCheckout = new Bank({
    account_holder_name ,
     account_number,
     bank_name,
     ifsc_code,
     cvc  
   });

   newCheckout.save();
   
})

module.exports = router;