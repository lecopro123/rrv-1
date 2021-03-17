import React, { Component } from "react";
import { connect } from "react-redux";
import App from "./app/App";
import { fetchNews } from "./redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    news: state.news,
<<<<<<< HEAD
    collections: state.news.coll
  }
}
=======
  };
};
>>>>>>> 5241ac729e162713d45192397fd415696455459d

const mapDispatchToProps = (dispatch) => ({
  fetchNews: (num) => dispatch(fetchNews(num)),
});

class Main extends Component {
  /*componentDidMount() {
    this.props.fetchNews();
  }*/
  render() {
    //let { data } = this.props.news.news;

<<<<<<< HEAD
    return (
      <App data={this.props.news} page={this.props.fetchNews} s={this.props.collections} />
    )
=======
    return <App data={this.props.news} page={this.props.fetchNews} />;
>>>>>>> 5241ac729e162713d45192397fd415696455459d
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
