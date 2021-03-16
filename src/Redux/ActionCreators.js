import * as Action from './ActionTypes';
import { api } from '../Api/index';


export const Load_news = () => ({ type: Action.Load_news })

export const Add_news = (news) => ({ type: Action.Add_news, payload: news })

export const Fail_news = (err) => ({ type: Action.Fail_news, payload: err })

export const fetchNews = (num) => (dispatch) => {
    dispatch(Load_news(true))

    return fetch(`https://www.readingright.in/apiservice/article/read/?page=${num}`)
        .then(resp => {
            if (resp.ok) {
                return resp;
            }
            else {
                var error = new Error("Error" + resp.status + ":" + resp.statusText);
                error.response = resp;
                throw error;
            }
        }, err => {
            var error = new Error(err.message);
            throw error;
        })
        .then(resp => resp.json())
        .then(resp => dispatch(Add_news(resp)))
        .catch(er => dispatch(Fail_news(er.message)));

}