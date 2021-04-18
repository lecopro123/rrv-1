import React, { useState, useEffect, useRef } from 'react';
import news from '../assets/new.svg';
import namer from '../assets/namer.svg';
import JD from '../assets/JD.svg';
function Menu() {
    const [cls, setcls] = useState(false);
    const [dis, setdis] = useState('None');
    useEffect(() => {
        if (dis === 'None') {
            setdis('Block')
        }
        else {
            setdis('None');
        }
    }, [cls])
    return (
        <div style={{ display: dis, overFlow: 'hidden' }} className="menubg">
            <button class="cut" onClick={() => setcls(!cls)}>&times;</button>
            <div className="cut1">
                <img src={namer} alt="PSk" style={{ width: '100px' }} />
            </div>
            <div className="cut1">
                <img src={JD} alt="jd" style={{ width: '50px', marginBottom: '7px' }} />
            </div>
            <div className="cut2">
                <div className="sans">Jhon Doe</div>
            </div>
            <div className="cut3">
                <div className="robo">Logout</div>
            </div>
            <div className="items">
                <ul>
                    <li>Home</li>
                    <li>Archives</li>
                    <li>Class Notes</li>
                    <li>Quizez</li>
                    <li>Discussion Rooms</li>
                </ul>
            </div>
            <div className="la">&#8592;</div>
            <div className="box">
                <div className="box1">
                    <div className="pad10"></div>
                    <img src={news} alt="PS" />
                    <div className="bname">
                        <div>The Wire</div>
                    </div>
                </div>

                <div className="box1">
                    <div className="pad10"></div>
                    <img src={news} alt="PS" />
                    <div className="bname">
                        <div>Caravan</div>
                    </div>
                </div>

                <div className="box1">
                    <div className="pad10"></div>
                    <img src={news} alt="PS" />
                    <div className="bname">
                        <div>The Wire</div>
                    </div>
                </div>

                <div className="box1">
                    <div className="pad10"></div>
                    <img src={news} alt="PS" />
                    <div className="bname">
                        <div>Caravan</div>
                    </div>
                </div>
            </div>
            <div className="ra">&#8594;</div>
        </div>
    )
}

export default Menu;