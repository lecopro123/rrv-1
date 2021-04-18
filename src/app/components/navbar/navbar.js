import React, { useState, useEffect, useRef } from 'react';
import menuIcon from "../../../assets/menu.svg";
import searchIcon from "../../../assets/search.svg";
import { Link } from 'react-router-dom';
import { Route, withRouter } from "react-router-dom";
import Search from '../../search';
import Menu from '../../Menu';
import { col } from '../../col';
import Fade from 'react-reveal/Fade';
import '../../App.scss';

function NavBar(props) {
  const [set, stset] = useState(false);
  const [setm, stsetm] = useState(false);
  useEffect(() => {
    //console.log(set)
  }, [set])
  return (
    <>
      <div className="pad10"></div>
      <div className="pad10"></div>
      <div className="App-header">
        <div className="App-header-actions">
          <div className="menu" onClick={() => { stsetm(!setm) }}>
            <img src={menuIcon} alt="m"></img>
          </div>
          {setm ? <Menu /> : null}
          <Link to="/"><img className="logo" src={props.logo} alt="Logo" /></Link>
          <div className="search" onClick={() => { stset(!set) }} >
            <img src={searchIcon} alt="s"></img>
          </div>
          {set ? <Search /> : null}
        </div>
        <div className="App-header-links">
          {props.cat.isLoading ? (
            <div className="loader"></div>
          ) : (props.cat.cat.data.map((cat, i) => {
            return (
              <Fade right>
                <div key={cat.id}><Link style={{ textDecoration: "none" }} to={{ pathname: `/category/${cat.sub_cat}/${cat.id}`, state: { det: cat.id } }}><p style={{ backgroundColor: col[i], padding: '5px', marginLeft: '5px', color: 'white' }} className="link">{cat.sub_cat} </p></Link></div>
              </Fade>
            )
          }))}
        </div>
      </div>
    </>
  );
}

export default withRouter(NavBar);
