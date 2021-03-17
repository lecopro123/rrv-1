import React, { Component } from "react";
import { connect } from "react-redux";
import App from "./app/App";
import { fetchNews } from "./Redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    news: state.news,
    collections: state.news.coll
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchNews: (num) => dispatch(fetchNews(num)),
});

class Main extends Component {
  /*componentDidMount() {
    this.props.fetchNews();
  }*/
  render() {
    //let { data } = this.props.news.news;

    return (
      <App data={this.props.news} page={this.props.fetchNews} s={this.props.collections} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
