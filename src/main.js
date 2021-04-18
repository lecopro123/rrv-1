import React, { Component } from "react";
import { connect } from "react-redux";
import App from "./app/App";
import AppCat from "./app/catapp";
import Login from "./app/login";
import Search from "./app/search";
import { fetchNews, fetchCat, fetchCatnews, fetchOtp, verifyOtp, fetchSub, fetchSbm, fetchSch, testFetch } from "./Redux/ActionCreators";
import NavBar from "./app/components/navbar/navbar";
import logo from "./assets/logo.png";
import Fav from './app/fav';
import './app/App.scss';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import Schools from './app/schools';
import Test from './app/test';

//import { IndexRoute } from 'react-router';

const mapStateToProps = (state) => {
  return {
    news: state.news,
    collections: state.news.coll,
    categories: state.categories,
    catnews: state.catnews,
    reqotp: state.reqotp,
    resotp: state.resotp,
    subs: state.subs,
    sbm: state.sbm,
    sch: state.sch,
    test: state.test,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchNews: (num) => dispatch(fetchNews(num)),
  fetchCat: () => dispatch(fetchCat()),
  fetchCatnews: (num) => dispatch(fetchCatnews(num)),
  fetchOtp: (num) => dispatch(fetchOtp(num)),
  verifyOtp: (num, otp) => dispatch(verifyOtp(num, otp)),
  fetchSub: () => dispatch(fetchSub()),
  fetchSbm: (num) => dispatch(fetchSbm(num)),
  fetchSch: () => dispatch(fetchSch()),
  testFetch: () => dispatch(testFetch()),
});

class Main extends Component {
  componentDidMount() {
    //console.log(this.props.location.state.det)
    this.props.fetchCat();
    //this.props.fetchSub();
    //this.props.fetchSbm(10);
    //this.props.fetchSch();
    this.props.testFetch();
    //if (this.props.location.state !== undefined) { this.props.fetchCatnews(this.props.location.state.det); }
  }
  render() {
    //let { data } = this.props.news.news;
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.resotp.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
      )} />
    );
    return (
      <>
        {/*<NavBar logo={logo} cat={this.props.categories} />*/}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <NavBar logo={logo} cat={this.props.categories} />
                <App data={this.props.news} page={this.props.fetchNews} s={this.props.collections} />
              </>
            )}
          />
          <Route exact path="/category/:cat/:catid" render={() => (
            <>
              <NavBar logo={logo} cat={this.props.categories} />
              <AppCat data={this.props.catnews} pages={this.props.fetchCatnews} />
            </>
          )} />
          <Route
            exact
            path="/login"
            render={() => (
              <>
                <Login req={this.props.fetchOtp} res={this.props.verifyOtp} otp={this.props.reqotp} con={this.props.resotp} />
              </>
            )}
          />
          <PrivateRoute path="/fav" component={() => (<><Fav s={this.props.location.state} /></>)} />
          <Route
            exact
            path="/test"
            render={() => (
              <>
                {<NavBar logo={logo} cat={this.props.categories} />}
                {<Schools data={this.props.sch} />}
                {/*<Test data={this.props.test} />*/}
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
