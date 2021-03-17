import * as Action from "./ActionTypes";

<<<<<<< HEAD
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
=======
export const News = (
  state = { isLoading: true, news: [], error: null },
  action
) => {
  switch (action.type) {
    case Action.Add_news:
      return { ...state, isLoading: false, news: action.payload, error: null };
    case Action.Load_news:
      return { ...state, isLoading: true, news: [], error: null };
    case Action.Fail_news:
      return { ...state, isLoading: false, news: [], error: action.payload };
    default:
      return state;
  }
};
>>>>>>> 5241ac729e162713d45192397fd415696455459d
