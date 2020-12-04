import React from "react";
import logo from "../../resources/images/logo-head-ecopetrol.png";
import ilustration from "../../resources/images/ilustration-login.png";

function FootImageLogin(props){
    return(<div className="col-sm-12 col-md-12 foot-image-login">
        <img src={logo} className="img-fluid img-ecopetrol" alt="logo ecopetrol" />
        <img src={ilustration} className="img-fluid mt-5" alt="ilustracion inicial" />
    </div>)
}

export default FootImageLogin;