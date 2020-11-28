import React from "react";
import { useDispatch } from "react-redux";
import {logOutAction} from '../../actions/estadoLoginActions';

const LogOut = (props) => {

    const dispatch = useDispatch();
    dispatch(logOutAction());

    return (
        <div>
            Gracias por estar con nosotros
        </div>
    )
}

export default LogOut;
