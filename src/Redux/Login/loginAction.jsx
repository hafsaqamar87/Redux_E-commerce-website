import { LOGIN,SIGNUP } from "./loginType"

export const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}
export const signUp = (data) => {
    return {
        type: SIGNUP,
        payload: data
    }
}
