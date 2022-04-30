import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const BankTransfer = () => {

    const [input, setInput] = useState({
        account_holder_name: '',
        account_number: '',
        bank_name: '',
        ifsc_code: '',
        cvc: ''
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(input) //to see in console
        toast.success("Payment Successful",
        {position: "top-center",
        autoClose: 1000,})
        const newCheckout = {
            account_holder_name: input.account_holder_name,
            account_number: input.account_number,
            bank_name: input.bank_name,
            ifsc_code: input.ifsc_code,
            cvc: input.cvc
        }
        axios.post('http://localhost:8000/bankTransfer ', newCheckout)
    }


    return (
        <>
            <div className='container'>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ui search focus mt-30 lbel25">
                                <label  >Account Holder Name:</label>
                                <div className="ui left icon input swdh11 swdh19">
                                    <input onChange={handleChange} name="account_holder_name" type="text" value={input.account_holder_name}
                                        required=""
                                        maxlength="64" placeholder="Enter Your Full Name" /><br />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ui search focus mt-30 lbel25">
                                <label  >Account Number:</label>
                                <div className="ui left icon input swdh11 swdh19">
                                    <input  onChange={handleChange} name="account_number" className="prompt srch_explore" type="text"
                                        maxlength="10" value={input.account_number}
                                        placeholder="Enter Account Number" /><br />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lbel25 mt-30">
                                <label >Bank Name:</label><br />
                                <select onChange={handleChange} name="bank_name" value={input.bank_name} className="ui hj145 dropdown cntry152 prompt srch_explore"
                                >
                                    <option value="State Bank of India">State Bank of India</option>
                                    <option value="Indian Bank">Indian Bank</option>
                                    <option value="ICICI Bank">ICICI Bank</option>
                                    <option value="HDFC Bank">HDFC Bank</option>
                                    <option value="Yes Bank">Yes Bank</option>
                                    <option value="Oriental Bank">Oriental Bank</option>
                                    <option value="Punjab National Bank">Punjab National Bank</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ui search focus mt-30 lbel25">
                                <label >IFSC Code:</label>
                                <div className="ui left icon input swdh11 swdh19">
                                    <input onChange={handleChange} name="ifsc_code" value={input.ifsc_code} className="prompt srch_explore" type="text"
                                        maxlength="10" placeholder="Enter IFSC Code" />
                                </div><br />
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick} className="chckot_btn" type="submit">Confirm Checkout</button>
                    <ToastContainer />
                </form>
            </div>


        </>
    )
}

export default BankTransfer;
