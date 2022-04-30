const express = require("express");
const router = express.Router();
const Credit = require("../models/checkoutModel")


router.route("/credit").post((req, res) => {
   const holdername = req.body.holdername;
   const cardnumber =  req.body.cardnumber;
   const cmonth =  req.body.cmonth;
   const expireyear =  req.body.expireyear;
   const cvc =  req.body.cvc;
   const newCheckout = new Credit({
     holdername ,
     cardnumber,
     cmonth,
     expireyear,
     cvc  
   });

   newCheckout.save();
   
})

module.exports = router;