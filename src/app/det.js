import React, { useState, useEffect, useRef } from 'react';
import { Route, withRouter } from "react-router-dom";
import JD from '../assets/JD.svg';

const Details = () => {
    const [cli, setcli] = useState(false);
    const [dis, setdis] = useState('');
    useEffect(() => {
        if (cli === false) setdis('at-floating-navigation');
        if (cli === true) setdis('at-floating-navigation--active');
    }, [cli])
    return (
        <div className={dis}>
            <button className="at-floating-navigation__button" type="button" onClick={() => setcli(!cli)} >+</button>
            <div className="at-floating-navigation__menu">
                <header className="at-floating-navigation__user">
                    <div className="at-floating-navigation__thumbnail">
                        <img alt="JD" src={JD} />
                    </div>
                    <div className="at-floating-navigation__content">
                        <h2 className="at-floating-navigation__title">Jhon Doe</h2>
                        <p className="at-floating-navigation__description">
                            <a href="/">View Profile</a>
                        </p>
                    </div>
                </header>
                <a className="at-floating-navigation__item" href="/">Settings</a>
                <a className="at-floating-navigation__item" href="/">Help Desk</a>
                <a className="at-floating-navigation__item" href="/">Log Out</a>
            </div>
        </div>
    )
}
export default withRouter(Details);