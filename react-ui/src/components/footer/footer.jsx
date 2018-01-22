import React from "react";
import LumosLogo from "../../images/lumosLogo.png";

import "./footer.css";

const Footer = () => {
    return (
        <div className="row footer">
            <div className="container">
                <div className="footer__logo">
                    <img src={LumosLogo} alt="" />
                </div>
                <div>
                    <p>Copyright 2018. All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
