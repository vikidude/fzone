import authTypes from './types';

let initialState = {
    registerUserData: null,
    registerError: null
};

const AuthReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case authTypes.REGISTER_USER_SUCCESS:
            const { registerUserData } = actions;
            return { ...state, registerUserData };
        case authTypes.REGISTER_USER_FAILED:
            const { registerError } = actions;
            return {
                ...state,
                registerError
            };
        case authTypes.RESET_REGISTER:
            return {
                ...state,
                registerError : null,
                registerUserData : null
            };
        default: {
            return state;
        }
    }
};

export default AuthReducer;