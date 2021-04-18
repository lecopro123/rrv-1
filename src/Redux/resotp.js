import * as Action from "./ActionTypes";

export const Resotp = (state = {
    isLoading: false, otpdata: [], error: null, isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token'), err: 0
}, action) => {
    switch (action.type) {
        case Action.res_otp:
            return { ...state, isLoading: false, isAuthenticated: true, otpdata: action.payload, token: action.token, error: null }
        case Action.val_load:
            return { ...state, isLoading: true, isAuthenticated: false, otpdata: [], error: null }
        case Action.fail_res_otp:
            return { ...state, isLoading: false, isAuthenticated: false, otpdata: [], error: action.payload, err: 1 }
        default: return state
    }
}
