import * as Action from "./ActionTypes";

export const SubMaterials = (state = { isLoading: true, mat: [], error: null }, action) => {
    switch (action.type) {
        case Action.add_sbm:
            //var comment = action.payload.data
            return { ...state, isLoading: false, mat: action.payload, error: null }
        case Action.load_sbm:
            return { ...state, isLoading: true, mat: [], error: null }
        case Action.fail_sbm:
            return { ...state, isLoading: false, mat: [], error: action.payload }
        default: return state
    }
}
