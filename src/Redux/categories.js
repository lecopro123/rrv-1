import * as Action from "./ActionTypes";

export const Categories = (state = { isLoading: true, cat: [], err: null }, action) => {
    switch (action.type) {
        case Action.Load_cat:
            return { ...state, isLoading: true, cat: [], err: null }
        case Action.Add_cat:
            return { ...state, isLoading: false, cat: action.payload, err: null }
        case Action.Fail_cat:
            return { ...state, isLoading: false, err: action.payload, cat: [] }
        default: return state
    }
}