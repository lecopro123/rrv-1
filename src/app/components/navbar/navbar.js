import menuIcon from "../../../assets/menu.svg";
import searchIcon from "../../../assets/search.svg";
import { Link } from 'react-router-dom';
import { Route, withRouter } from "react-router-dom";

function NavBar(props) {
  //console.log(props.cat.isLoading)
  return (
    <div className="App-header">
      <div className="App-header-actions">
        <div className="menu">
          <img src={menuIcon} alt="m"></img>
        </div>
        <img className="logo" src={props.logo} alt="Logo" />
        <div className="search">
          <img src={searchIcon} alt="s"></img>
        </div>
      </div>
      <div className="App-header-links">
        {props.cat.isLoading ? (
          <div className="loader"></div>
        ) : (props.cat.cat.data.map(cat => {
          return (
            <div key={cat.id}><Link to={{ pathname: `/category/${cat.sub_cat}/${cat.id}`, state: { det: cat.id } }}><p className="link">{cat.sub_cat} |</p></Link></div>
          )
        }))}
      </div>
    </div>
  );
}

export default withRouter(NavBar);
