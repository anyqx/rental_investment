import * as APIUtil from '../util/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
})

const logoutCurrentUser = () => {
    return{
    type: LOGOUT_CURRENT_USER,
    }
}

export const receiveErrors = errors => {
    return {
    type: RECEIVE_SESSION_ERRORS,
    errors
    }
}

export const removeErrors = () => ({
    type: REMOVE_SESSION_ERRORS
})


export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)))

)

export const login = user => dispatch => (
    APIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => {
                // debugger
                return dispatch(receiveErrors(errors.responseJSON))})
)

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
)
