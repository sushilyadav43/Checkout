import React, {useState} from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {Modal,Button} from 'react-bootstrap's
// import { Link } from 'react-router-dom';

export const Credit = () => {

    const [input, setInput] = useState({
        holdername: '',
        cardnumber: '',
        cmonth: '',
        expireyear: '',
        cvc: ''
      })
    
      function handleChange(event) {
        const{name, value} = event.target;
    
        setInput(prevInput => {
          return {
            ...prevInput,
            [name]: value
          }
        })
      }
    
      function handleClick(event) {
        event.preventDefault();
        console.log(input)
        toast.success("Payment Successful",
        {position: "top-center",
        autoClose: 1000,})
        const newCheckout = {
          holdername: input.holdername,
          cardnumber: input.cardnumber,
          cmonth: input.cmonth,
          expireyear: input.expireyear,
          cvc: input.cvc
        }
        axios.post('http://localhost:8000/credit ', newCheckout)
      }

      

  return (
    <>
        
              <div className='container'>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="ui search focus mt-30 lbel25">
                      <label>Holder Name</label>
                      <div className="ui left icon input swdh11 swdh19">
                        <input onChange={handleChange} className="prompt srch_explore" type="text"
                          name="holdername" value={input.holdername} required=""
                          maxlength="64" placeholder="Enter Holder Name" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="ui search focus mt-30 lbel25">
                      <label>Card Number</label>
                      <div className="ui left icon input swdh11 swdh19">
                        <input onChange={handleChange} className="cnumber" type="text"
                          name="cardnumber" value={input.cardnumber} maxlength="16" placeholder="Card #" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="lbel25 mt-30">
                      <label>Expiration Month</label><br />
                      <select onChange={handleChange} className="search"
                        name="cmonth" value={input.cmonth}>
                        <option value="">Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="ui search focus mt-30 lbel25">
                      <label>Expiration Year</label>
                      <div className="ui left icon input swdh11 swdh19">
                        <input onChange={handleChange} className="expiration" type="text"
                          name="expireyear" value={input.expireyear} maxlength="4" placeholder="Year" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="ui searchs focus mt-30 lbel25">
                      <label>Expiration Year</label>
                      <div className="ui left icon input swdh11 swdh19">
                        <input onChange={handleChange} className="prompt srch_explore" type="text" name="cvc" value={input.cvc}
                          maxlength="3" placeholder="CVC" />
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={handleClick}   className="chckot_btn" type="submit">Confirm Checkout</button>
                <ToastContainer />
              </form>

            </div>
    </>
  )
}

export default Credit;
