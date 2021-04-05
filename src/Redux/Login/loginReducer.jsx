import { LOGIN, SIGNUP } from "./loginType";
const initialState = {
    accountData: JSON.parse(localStorage.getItem('accountData')) || [],
    login: JSON.parse(localStorage.getItem('login')) || {},
    data: JSON.parse(localStorage.getItem('signUp')) || {},
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                accountData: state.accountData,
                login: action.payload
            }
        case SIGNUP:
            localStorage.setItem('accountData', JSON.stringify([...state.accountData, action.payload]))
            return {
                accountData: [...state.accountData, action.payload],
                signUp: action.payload
            }
        default:
            return state
    }
}
export default loginReducer;