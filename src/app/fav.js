import React from 'react';
import { Route, withRouter } from "react-router-dom";

const Fav = (props) => {
    return (
        <div>
            <h1>ihbovobob{props.s}</h1>
        </div>
    )
}
export default withRouter(Fav);