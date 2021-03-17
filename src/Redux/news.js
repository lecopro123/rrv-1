import * as Action from './ActionTypes';

export const News = (state = { isLoading: true, news: [], coll: [], error: null }, action) => {
    switch (action.type) {
        case Action.Add_news:
            var comment = action.payload.data
            return { ...state, isLoading: false, news: action.payload, coll: state.coll.concat(comment), error: null }
        case Action.Load_news:
            return { ...state, isLoading: true, news: [], error: null }
        case Action.Fail_news:
            return { ...state, isLoading: false, news: [], error: action.payload }
        default: return state
    }
}