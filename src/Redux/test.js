import * as Action from "./ActionTypes";

export const TestCase = (state = { isLoading: true, newi: [], error: null }, action) => {
    switch (action.type) {
        case Action.test_A:
            //var comment = action.payload.data
            return { ...state, isLoading: false, newi: action.payload, error: null }
        case Action.test_L:
            return { ...state, isLoading: true, newi: [], error: null }
        case Action.test_F:
            return { ...state, isLoading: false, newi: [], error: action.payload }
        default: return state
    }
}
