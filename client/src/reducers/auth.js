import { CLEAR_AUTH_STATE, LOGIN_START, SIGNUP_START, LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGIN_FAILED, SIGNUP_FAILED, AUTHENTICATE_USER, LOG_OUT } from "../actions/actionTypes";

const initialAuthState={
    user:{},
    error:null,
    isLoggedIn:false,
    inProgress:false
}

export default function auth(state=initialAuthState,action){
    switch(action.type){
        case CLEAR_AUTH_STATE:
            return{
                ...state,
                error:null
            }
        case LOGIN_START:
        case SIGNUP_START:
            return {
                ...state,
                inProgress:true,
            };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return{
                ...state,
                user: action.user,
                isLoggedIn:true,
                error:null,
                inProgress:false,
            }
        case LOGIN_FAILED:
        case SIGNUP_FAILED:
            return{
                ...state,
                inProgress:false,
                error:action.error,
            }
        case AUTHENTICATE_USER:
            return{
                ...state,
                user:action.user,
                isLoggedIn:true,
            }
        case LOG_OUT:
            return{
                ...state,
                user:{},
                isLoggedIn:false,
            }
        default:
            return state;
    }
}