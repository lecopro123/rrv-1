import React, { useState, useEffect, useRef } from 'react';
import search from '../assets/search1.svg';
import useKeypress from './key';

const Search = () => {
    const [cls, setcls] = useState(false);
    const [dis, setdis] = useState('None');
    useKeypress('Escape', () => {
        setdis('None')
    });
    useEffect(() => {
        //console.log(cls1);
        if (dis === 'None') {
            setdis('Block')
        }
        else {
            setdis('None');
        }
    }, [cls])
    return (
        <div tabIndex={"0"} style={{ display: dis }} className="bg" >
            <div className="centre">
                <button class="close" onClick={() => { setcls(!cls) }} >&times;</button>
                <div className="text">Press ESC to Close</div>
                <input placeholder="Type to start your Search" />
                <div className="ser">
                    <img src={search} alt="n" />
                </div>
            </div>
        </div >
    )
}

export default Search;
