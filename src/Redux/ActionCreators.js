import * as Action from "./ActionTypes";

export const Load_news = () => ({ type: Action.Load_news });

export const Add_news = (news) => ({ type: Action.Add_news, payload: news });

export const Fail_news = (err) => ({ type: Action.Fail_news, payload: err });

export const fetchNews = (num) => (dispatch) => {
  dispatch(Load_news(true));

  return fetch(
    `https://www.readingright.in/apiservice/article/read/?page=${num}`
  )
    .then(
      (resp) => {
        if (resp.ok) {
          return resp;
        } else {
          var error = new Error("Error" + resp.status + ":" + resp.statusText);
          error.response = resp;
          throw error;
        }
      },
      (err) => {
        var error = new Error(err.message);
        throw error;
      }
    )
    .then((resp) => resp.json())
    .then((resp) => dispatch(Add_news(resp)))
    .catch((er) => dispatch(Fail_news(er.message)));
};

export const Load_cat = () => ({ type: Action.Load_cat });

export const Add_cat = (cat) => ({ type: Action.Add_cat, payload: cat });

export const Fail_cat = (err) => ({ type: Action.Fail_cat, payload: err });

export const fetchCat = () => (dispatch) => {
  dispatch(Load_cat(true));

  return fetch(`https://www.readingright.in/apiservice/article/category/`)
    .then((resp) => {
      if (resp.ok) {
        return resp;
      } else {
        var error = new Error("Error" + resp.status + ":" + resp.statusText);
        error.response = resp;
        throw error;
      }
    }, err => {
      var error = new Error(err.message);
      throw error;
    })
    .then(resp => resp.json())
    .then(resp => dispatch(Add_cat(resp)))
    .catch(er => dispatch(Fail_cat(er.message)));
};

export const Load_cat_news = () => ({ type: Action.Load_cat_news });

export const Add_cat_news = (cat) => ({ type: Action.Add_cat_news, payload: cat });

export const Fail_cat_news = (err) => ({ type: Action.Fail_cat_news, payload: err });

export const fetchCatnews = (n) => (dispatch) => {
  dispatch(Load_cat_news(true));

  return fetch(`https://www.readingright.in/apiservice/article/category/${n}`)
    .then((resp) => {
      if (resp.ok) {
        return resp;
      } else {
        var error = new Error("Error" + resp.status + ":" + resp.statusText);
        error.response = resp;
        throw error;
      }
    }, err => {
      var error = new Error(err.message);
      throw error;
    })
    .then(resp => resp.json())
    .then(resp => dispatch(Add_cat_news(resp)))
    .catch(er => dispatch(Fail_cat_news(er.message)));
};
