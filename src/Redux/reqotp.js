import * as Action from "./ActionTypes";

export const Reqotp = (state = { isLoading: true, otpdata: [], error: null }, action) => {
    switch (action.type) {
        case Action.req_otp:
            return { ...state, isLoading: false, otpdata: action.payload, error: null }
        case Action.load_req_otp:
            return { ...state, isLoading: true, otpdata: [], error: null }
        case Action.fail_req_otp:
            return { ...state, isLoading: false, news: [], error: action.payload }
        default: return state
    }
}
