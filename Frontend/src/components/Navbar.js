import React, { useState, useEffect } from "react";
import "./style.css";





const Navbar = () => {

    const [modal, setModal] = useState(false);

    const imageClick = () => {
      setModal(!modal)
    }


    return (
        <>

            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="nav_color">
                                <nav >
                                    <div className="navbar">
                                        <a href="/"><img src="/images/fav.png" alt="image" />Back to cursus</a>
                                        <a href="/">Home</a>
                                        <a href="membership.html">Paid Membership</a>
                                        <a href="/Checkout">Checkout</a>
                                        <a href='#'><img onClick={imageClick} className="logo" src="images/hd_dp.jpg" alt="" /></a>
                                    </div>
                                </nav>

                                {
                                    modal && (<div>
                                        <div className="menu dropdown_account" >
                                            <div className="channel_my">
                                                <div className="profile_link">
                                                    {/* <img src="images/hd_dp.jpg" alt="" /> */}
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
                                                <a href="#" id="night-mode" className="btn-night-mode">
                                                    <i className="uil uil-moon"></i> Night mode
                                                    <span className="btn-night-mode-switch">
                                                        <span className="uk-switch-button"></span>
                                                    </span>
                                                </a>
                                            </div>
                                            <a href="instructor_dashboard.html" className="item channel_item">Cursus Dashboard</a>
                                            <a href="sign_in.html" className="item channel_item">Sign Out</a>
                                        </div>
                                    </div>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;