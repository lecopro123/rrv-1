import * as Action from "./ActionTypes";

export const Subjects = (state = { isLoading: true, coll: [], error: null }, action) => {
    switch (action.type) {
        case Action.add_sub:
            //var comment = action.payload.data
            return { ...state, isLoading: false, coll: action.payload, error: null }
        case Action.load_sub:
            return { ...state, isLoading: true, coll: [], error: null }
        case Action.fail_sub:
            return { ...state, isLoading: false, coll: [], error: action.payload }
        default: return state
    }
}
