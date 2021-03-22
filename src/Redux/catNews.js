import * as Action from "./ActionTypes";

export const CatNews = (state = { isLoading: true, catNews: [], err: null }, action) => {
    switch (action.type) {
        case Action.Load_cat_news:
            return { ...state, isLoading: true, catNews: [], err: null }
        case Action.Add_cat_news:
            return { ...state, isLoading: false, catNews: action.payload, err: null }
        case Action.Fail_cat_news:
            return { ...state, isLoading: false, err: action.payload, catNews: [] }
        default: return state
    }
}