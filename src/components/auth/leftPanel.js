import React from "react";
import logo from "../../resources/images/logo-head-ecopetrol.png";
import ilustration from "../../resources/images/ilustration-login.png";


function LeftPanel(props) {
    return(
        <div className="hidden-xs col-sm-8 col-md-8 col-lg-8 col-xl-9 col-full-height login-main-content">
            <img src={logo} className="img-fluid img-ecopetrol" alt="logo ecopetrol" />
            <div className="row w-100 text-left-login ml-4">
                <div className="col-12 mt-4"><h3>Pasaporte Digital</h3></div>
                <div className="col-12"><span>Por un acceso mas seguro para todos</span></div>
            </div>
            <img src={ilustration} className="img-fluid ilustration" alt="ilustracion inicial" />
        </div>
    )
}

export default LeftPanel;