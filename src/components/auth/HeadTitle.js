import React from "react";
import {Link} from "react-router-dom";

function HeadTitle(props) {
    return(
        <div className="dv-head-options">
            <span style={{textAlign:"center", marginInlineStart:"center"}}>{props.title}</span><br/>
            <Link to={"/"+props.linkUrl} type="text" style={{textAlign:"center"}}>
                {props.linkText}
            </Link>
        </div>
    )
}

export default HeadTitle;