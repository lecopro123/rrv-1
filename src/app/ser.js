import React, { useState, useEffect, useRef } from 'react';
import './ser.scss';

const Ser = () => {
    return (

        <form action="" className="search-bar">
            <input type="search" name="search" style={{ borderRightColor: '#d97e79' }} pattern=".*\S.*" required />
            <button className="search-btn" style={{ borderColor: '#d97e79' }} type="submit">
                <span>Search</span>
            </button>
        </form>

    )
}
export default Ser;