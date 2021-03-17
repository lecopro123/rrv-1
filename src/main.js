import React, { Component } from "react";
import { connect } from "react-redux";
import App from "./app/App";
import { fetchNews } from "./redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNews: (num) => dispatch(fetchNews(num)),
});

class Main extends Component {
  /*componentDidMount() {
    this.props.fetchNews();
  }*/
  render() {
    //let { data } = this.props.news.news;

    return <App data={this.props.news} page={this.props.fetchNews} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
