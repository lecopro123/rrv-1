import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import Ellipsis from '../assets/Ellipse.svg';
import Log from '../assets/LLogo.svg';

const Login = (props) => {
    let loc = useLocation();
    let his = useHistory();
    const [inp, setin] = useState('');
    const [otp, setotp] = useState('');
    const [click, setclick] = useState(false);
    const [cli, setcli] = useState(false);
    const [clk, setclk] = useState(false);
    const isFirstRun = useRef(true);
    const isRun = useRef(true);
    const isRu = useRef(true);

    console.log(loc.state)
    console.log(props.con)
    useEffect(() => {
        if (isRu.current) {
            isRu.current = false;
            return;
        }
        his.push(loc.state.from.pathname)
        //console.log(inp)
    }, [props.con.isAuthenticated])
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        if (inp.length >= 10 && /^\d+$/.test(inp)) {
            props.req(inp)
            //setin('');
        }
        //console.log(inp)
    }, [click])
    useEffect(() => {
        if (isRun.current) {
            isRun.current = false;
            return;
        }
        props.res(inp, otp);
        //console.log(otp)
    }, [cli])
    return (
        <div className="login">
            <div className="split left">
                <div className="some">
                    <div class="parent">
                        <img src={Log} alt="L"></img>
                    </div>
                </div>
                <div className="mp">
                    <img className="ELD" src={Ellipsis} alt="E"></img>
                </div>
            </div>
            <div className="split right">
                <div className="some1">
                    <div class="parent1">
                        <div className="Data">
                            <div className="dis">
                                <div className="Wr">
                                    <p>Please enter your phone number to continue</p>
                                </div>
                            </div>
                            <div className="padd"></div>
                            {!props.otp.isLoading ?
                                <div className="dis">
                                    <div className="Wr">
                                        <p>Your OTP is {props.otp.otpdata.OTP}</p>
                                    </div>
                                </div>
                                : null}
                            {!props.otp.isLoading ?

                                (<div className="in">
                                    <input type="text" className="styled" placeholder="OTP" value={otp} onChange={(e) => setotp(e.target.value)} />
                                </div>) :
                                (<div className="in">
                                    <input type="text" className="styled" placeholder="Your Phone Number" value={inp} onChange={(e) => setin(e.target.value)} />
                                </div>)}
                            <div className="padd"></div>
                            {!props.otp.isLoading ?
                                <div className="btn-container1" onClick={() => setcli(!cli)}>
                                    <div className="more-btn"> Verify OTP</div>
                                </div> :
                                <div className="btn-container1" onClick={() => setclick(!click)}>
                                    <div className="more-btn"> Get OTP</div>
                                </div>}
                            <div className="padd"></div>
                            {/*props.con.isAuthenticated ?
                                <div className="btn-container1" onClick={() => setclk(!clk)}>
                                    <div className="more-btn1"> Go to the page </div>
                            </div> : null*/}
                            <div className="padd"></div>
                            {props.con.err === 1 && props.con.error !== null ?
                                <div className="btn-container1">
                                    <div className="more-btn2"> {props.con.error} </div>
                                </div> : null}
                        </div>
                    </div>
                </div>
                <div className="mp">
                    <img className="BELD" src={Ellipsis} alt="E"></img>
                </div>
            </div>
        </div>
    )
}
export default Login;