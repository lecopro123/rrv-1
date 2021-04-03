import React from 'react';
import Ellipsis from '../assets/Ellipse.svg';
import Log from '../assets/LLogo.svg';

const Login = () => {
    return (
        <div>
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
                            <div className="in">
                                <input type="text" className="styled" placeholder="Your Phone Number" />
                            </div>
                            <div className="padd"></div>
                            <div className="btn-container1" >
                                <div className="more-btn"> Get OTP</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;