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

export const load_req_otp = () => ({ type: Action.load_req_otp });

export const req_otp = (otp) => ({ type: Action.req_otp, payload: otp });

export const fail_req_otp = (err) => ({ type: Action.fail_req_otp, payload: err });

export const val_load = () => ({ type: Action.val_load });

export const res_otp = (res, token) => ({ type: Action.res_otp, payload: res, token: token });

export const fail_res_otp = (otp) => ({ type: Action.fail_res_otp, payload: otp });

export const fetchOtp = (num) => (dispatch) => {
  dispatch(load_req_otp(true));

  return fetch(`https://www.readingright.in/apiservice/user/?phonenumber=${num}`)
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
    .then(resp => dispatch(req_otp(resp)))
    .catch(er => dispatch(fail_req_otp(er.message)));
};

export const verifyOtp = (num, otp) => (dispatch) => {
  dispatch(val_load(true));

  return fetch(`https://www.readingright.in/apiservice/user_auth/otp_verification/?phonenumber=${num}&otp=${otp}`)
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
    //.then(resp => dispatch(res_otp(resp)))
    .then(res => {
      if (res.verified === 1) {
        var token = Math.random(1).toString().replace('0.', '')
        localStorage.setItem('token', token);
        //console.log(Math.random().toString().replace('0.', ''));
        dispatch(res_otp(res, token))
      }
      else {
        var error = new Error('Error ' + res.status);
        error.response = res;
        throw error;
      }
    })
    .catch(er => dispatch(fail_res_otp("OTP expired or wrong OTP")));
};

export const load_sub = () => ({ type: Action.load_sub });

export const add_sub = (news) => ({ type: Action.add_sub, payload: news });

export const fail_sub = (err) => ({ type: Action.fail_sub, payload: err });

export const fetchSub = () => (dispatch) => {
  dispatch(load_sub(true));

  return fetch(
    `https://tools.readingright.in/temp/subjects`
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
    .then((resp) => dispatch(add_sub(resp)))
    .catch((er) => dispatch(fail_sub(er.message)));
};

export const load_sbm = () => ({ type: Action.load_sbm });

export const add_sbm = (news) => ({ type: Action.add_sbm, payload: news });

export const fail_sbm = (err) => ({ type: Action.fail_sbm, payload: err });

export const fetchSbm = (num) => (dispatch) => {
  dispatch(load_sbm(true));

  return fetch(
    `https://tools.readingright.in/temp/contents?subject_id=${num}`
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
    .then((resp) => dispatch(add_sbm(resp)))
    .catch((er) => dispatch(fail_sbm(er.message)));
};

export const load_sch = () => ({ type: Action.load_sch });

export const add_sch = (news) => ({ type: Action.add_sch, payload: news });

export const fail_sch = (err) => ({ type: Action.fail_sch, payload: err });

export const fetchSch = () => (dispatch) => {
  dispatch(load_sch(true));

  return fetch(
    `https://tools.readingright.in/temp/institutions`
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
    .then((resp) => dispatch(add_sch(resp)))
    .catch((er) => dispatch(fail_sch(er.message)));
};

export const test_L = () => ({ type: Action.test_L });

export const test_A = (news) => ({ type: Action.test_A, payload: news });

export const test_F = (err) => ({ type: Action.test_F, payload: err });

export const testFetch = () => (dispatch) => {
  dispatch(test_L(true));

  return fetch(
    `https://www.readingright.in/apiservice/article/read/?id=78&user_id=97`
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
    .then((resp) => dispatch(test_A(resp)))
    .catch((er) => dispatch(test_F(er.message)));
};