import React, { useState, useEffect } from 'react'
import { Overlay, Popover } from 'react-bootstrap';
import { Tab,Tabs } from 'react-bootstrap';
import "./checkout.css";
// import axios from "axios";
import { Link } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-tooltip/dist/react-tooltip.css';  
// import ReactTooltip from 'react-bootstrap';





export default function Checkout() {




  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);


  const imageClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };


  const [edit, setEdit] = useState(false);

  const editClick = () => {
    setEdit(!edit)
  }

  // const [dark, setMode] = useState(false) // if we use this then after refreshing the page darkmode will disappear

  //if we use this then after refreshing the page darkmode will not disappear
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }
  const [dark, setMode] = useState(getMode())
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])







  return (
    <>

      <div className={dark ? "wrapper dark-mode" : "wrapper"} >
        <nav >
          <div className="navbar">
            <a href="/"><img src="/images/fav.png" alt="image" />Back to cursus</a>
            <a href="/">Home</a>
            <a href="membership.html">Paid Membership</a>
            <a href="/Checkout">Checkout</a>
            <a href='#'><img onClick={imageClick} className="logo" src="images/hd_dp.jpg" alt="" /></a>

            <Overlay
              show={show}
              target={target}
              placement="bottom"

              containerPadding={20}
            >
              <Popover id="popover-contained">
                <Popover.Body>
                  <div>
                    <div className="menu dropdown_account change_color" >
                      <div className="channel_my">
                        <div className="profile_link">
                          <img src="images/hd_dp.jpg" alt="" />
                          <div className="pd_content">
                            <div className="rhte85">
                              <h6>Joginder Singh</h6>
                              <div className="mef78" title="Verify">
                                <i className='uil uil-check-circle'></i>
                              </div>
                            </div>
                            <span><a href="https://gambolthemes.net/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="d7b0b6bab5b8bbeee3e497b0bab6bebbf9b4b8ba">[email&#160;protected]</a></span>
                          </div>
                        </div>
                        <a href="my_instructor_profile_view.html" className="dp_link_12">View Instructor
                          Profile</a>
                      </div>
                      <div className="night_mode_switch__btn">
                        <a id="night-mode" className="btn-night-mode">
                          <i className="uil uil-moon"></i> Night mode
                        </a>
                        <label className="switch">
                          <input type="checkbox" onChange={() => setMode(!dark)} />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <a href="instructor_dashboard.html" className="item channel_item">Cursus Dashboard</a><br />
                      <a href="sign_in.html" className="item channel_item">Sign Out</a>
                    </div>
                  </div>
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>
        </nav>






        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="membership_chk_bg">
                <div className="checkout_title">
                  <h4>Billing Details</h4>
                  <img src="images/line.svg" alt="" />
                </div>
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="address1">
                      <div className="panel-title">
                        <a onClick={editClick} className="collapsed" data-toggle="collapse" data-parent="#accordion"
                          href="#" aria-expanded="false"
                          aria-controls="collapseaddress1">
                          Edit Address
                        </a>
                      </div>
                    </div>

                    {edit && (
                      <form>
                        <div className="row change_color">
                          <div className="col-lg-6 ">
                            <div className="ui search focus mt-30 lbel25">
                              <label>First Name*</label>
                              <div className="ui left icon input swdh11 swdh19">
                                <input className="prompt srch_explore" type="text"
                                  name="name" id="id_name"
                                  required="" maxlength="64" placeholder="First Name" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="ui search focus mt-30 lbel25">
                              <label>Last Name*</label>
                              <div className="ui left icon input swdh11 swdh19">
                                <input className="prompt srch_explore" type="text"
                                  name="surname" value="" id="id_surname"
                                  required="" maxlength="64" placeholder="Last Name" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="ui search focus mt-30 lbel25">
                              <label>Academy Name*</label>
                              <div className="ui left icon input swdh11 swdh19">
                                <input className="prompt srch_explore" type="text"
                                  name="academyname" value=""
                                  id="id_academy" required="" maxlength="64"
                                  placeholder="Academy Name" />
                              </div>
                              <div className="help-block">If you want your invoices addressed
                                to a academy. Leave blank to use your full name.</div>
                            </div>
                          </div>
                          <div className="col-lg-12 ">
                            <div className="mt-30 lbel25">
                              <label>Country*</label>
                            </div>
                            <div className='search'>
                              <select name="country" id="speed" required className='form'>
                                <option value="country">Select country</option>
                                <option value="country">Afghanistan</option>
                                <option value="country">Bangladesh</option>
                                <option value="country">Canada</option>
                                <option value="country">Europe</option>
                                <option value="country">India</option>
                                <option value="country">Nepal</option>
                                <option value="country">Norway</option>
                                <option value="country">USA</option>
                                <option value="country">Afghanistan</option>
                                <option value="country">Bangladesh</option>
                                <option value="country">Canada</option>
                                <option value="country">Europe</option>
                                <option value="country">India</option>
                                <option value="country">Nepal</option>
                                <option value="country">Norway</option>
                                <option value="country">USA</option>
                              </select><br />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="ui search focus mt-30 lbel25">
                              <label>Address1*</label>
                              <div className="ui left icon input swdh11 swdh19">
                                <input className="prompt srch_explore" type="text"
                                  name="addressname"
                                  value=""
                                  id="id_address1" required="" maxlength="300"
                                  placeholder="Address Line 1" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="ui search focus mt-30 lbel25">
                              <label>Address2*</label>
                              <div className="ui left icon input swdh11 swdh19">
                                <input className="prompt srch_explore" type="text"
                                  name="addressname2"
                                  value=""
                                  id="id_address2" required="" maxlength="300"
                                  placeholder="Address Line 2" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="ui search focus mt-30 lbel25">
                              <label>City*</label>
                              <div className="ui left icon input swdh11 swdh19">
                                <input className="prompt srch_explore" type="text"
                                  name="city" value="" id="id_city"
                                  required="" maxlength="64" placeholder="City" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="ui search focus mt-30 lbel25">
                              <label>State / Province / Region*</label>
                              <div className="ui left icon input swdh11 swdh19">
                                <input className="prompt srch_explore" type="text"
                                  name="state" value="" id="id_state"
                                  required="" maxlength="64"
                                  placeholder="State / Province / Region" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="ui search focus mt-30 lbel25">
                              <label>Zip/Postal Code*</label>
                              <div className="ui left icon input swdh11 swdh19">
                                <input className="prompt srch_explore" type="text"
                                  name="zip" value="" id="id_zip" required=""
                                  maxlength="64" placeholder="Zip / Postal Code" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="ui search focus mt-30 lbel25">
                              <label>Phone Number*</label>
                              <div className="ui left icon input swdh11 swdh19">
                                <input className="prompt srch_explore" type="text"
                                  name="phone" value="" id="id_phone"
                                  required="" maxlength="12"
                                  placeholder="Phone Number" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <button className="save_address_btn" type="submit">Save
                              Changes</button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
                <div className="change_color">
                  Joginder Singh<br />
                  #1234 Street No. 45, Ward No. 60, Phase 3,<br /> Shahid Karnail Singh Nagar, Near
                  Pakhowal<br /> Road.<br />
                  Ludhiana, Punjab, 141013<br />
                  India
                </div>
              </div>
            </div>


            <div className="col-lg-4 change_color ">
              <div className="membership_chk_bg rght1528">
                <div className="checkout_title">
                  <h4>Order Summary</h4>
                  <img src="images/line.svg" alt="" />
                </div>
                <div className="order_dt_section">
                  <div className="order_title">
                    <h4>Baby Plan</h4>
                    <div className="order_price">$49</div>
                  </div>
                  <div className="order_title">
                    <h6>Taxes(GST)</h6>
                    <div className="order_price">$2</div>
                  </div>
                  <div className="order_title">
                    <h2>Total</h2>
                    <div className="order_price5">$51</div>
                  </div>
                  <div className="scr_text"><i className="uil uil-lock-alt"></i>Secure checkout</div>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout_title">
            <h4>Select Payment Method</h4>
            <img src="images/line.svg" alt="" />
          </div>
        </div>

        <div className='container'>
          
            <nav  className='navbar c2 '>
              
              <h4><Link className='link link1 data-sm-link-text="Remove All"' to="/">Credit/Debit Card</Link></h4>
              <h4><Link className='link link1' to="/bankTransfer">BankTransfer</Link></h4>
              <h4><Link className='link link1' to="/paypal">Paypal</Link></h4>
            
            </nav>
          
        </div>




      </div>
      <br />


    </>
  )
};



