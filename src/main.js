import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNews } from './Redux/ActionCreators';
import App from './app/App'

const mapStateToProps = state => {
  return {
    news: state.news,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchNews: (num) => dispatch(fetchNews(num))
})

class Main extends Component {
  constructor(props) {
    super(props);
  }
  /*componentDidMount() {
    this.props.fetchNews();
  }*/
  render() {
    //let { data } = this.props.news.news;

    return (
      <App data={this.props.news} page={this.props.fetchNews} />
    )
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));
