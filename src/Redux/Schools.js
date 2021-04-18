import * as Action from "./ActionTypes";

export const Schools = (state = { isLoading: true, coll: [], error: null }, action) => {
    switch (action.type) {
        case Action.add_sch:
            //var comment = action.payload.data
            return { ...state, isLoading: false, coll: action.payload, error: null }
        case Action.load_sch:
            return { ...state, isLoading: true, coll: [], error: null }
        case Action.fail_sch:
            return { ...state, isLoading: false, coll: [], error: action.payload }
        default: return state
    }
}
