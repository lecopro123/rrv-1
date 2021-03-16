import * as Action from './ActionTypes';

export const News = (state = { isLoading: true, news: [], error: null }, action) => {
    switch (action.type) {
        case Action.Add_news:
            return { ...state, isLoading: false, news: action.payload, error: null }
        case Action.Load_news:
            return { ...state, isLoading: true, news: [], error: null }
        case Action.Fail_news:
            return { ...state, isLoading: false, news: [], error: action.payload }
        default: return state
    }
}