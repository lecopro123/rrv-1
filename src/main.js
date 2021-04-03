import React, { Component } from "react";
import { connect } from "react-redux";
import App from "./app/App";
import AppCat from "./app/catapp";
import Login from "./app/login";
import { fetchNews, fetchCat, fetchCatnews } from "./Redux/ActionCreators";
import NavBar from "./app/components/navbar/navbar";
import logo from "./assets/logo.png";
import './app/App.scss';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
//import { IndexRoute } from 'react-router';

const mapStateToProps = (state) => {
  return {
    news: state.news,
    collections: state.news.coll,
    categories: state.categories,
    catnews: state.catnews,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchNews: (num) => dispatch(fetchNews(num)),
  fetchCat: () => dispatch(fetchCat()),
  fetchCatnews: (num) => dispatch(fetchCatnews(num))
});

class Main extends Component {
  componentDidMount() {
    //console.log(this.props.location.state.det)
    this.props.fetchCat();
    //if (this.props.location.state !== undefined) { this.props.fetchCatnews(this.props.location.state.det); }
  }
  render() {
    //let { data } = this.props.news.news;
    return (
      <>
        {<NavBar logo={logo} cat={this.props.categories} />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <App data={this.props.news} page={this.props.fetchNews} s={this.props.collections} />
              </>
            )}
          />
          <Route exact path="/category/:cat/:catid" render={() => (
            <>
              <AppCat data={this.props.catnews} pages={this.props.fetchCatnews} />
            </>
          )} />
          <Route
            exact
            path="/login"
            render={() => (
              <>
                <Login />
              </>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
