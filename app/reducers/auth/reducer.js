import authTypes from './types';

let initialState = {
    registerUserData: null,
    registerError: null,
    isRequesting: false,

    globalLeaderBoard: [],
    isGlobalLeaderRequesting: true,
    authResponse: null,
};

const AuthReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case authTypes.SET_AUTH_RESPONSE:
            const {authResponse} = actions;
            console.log('Auth response: ',authResponse)
            return{...state,authResponse}

        case authTypes.SET_GLOBAL_BOARD:
            const { isGlobalLeaderRequesting, globalLeaderBoard } = actions
            return { ...state, isGlobalLeaderRequesting, globalLeaderBoard }

        case authTypes.REGISTER_REQUESTING:
            return { ...state, isRequesting: true, registerError: null }

        case authTypes.REGISTER_USER_SUCCESS:
            const { registerUserData } = actions;
            return { ...state, registerUserData, isRequesting: false, registerError: null };
        case authTypes.REGISTER_USER_FAILED:
            const { registerError } = actions;
            return {
                ...state,
                registerError,
                isRequesting: false
            };
        case authTypes.RESET_REGISTER:
            return {
                ...state,
                registerError: null,
                registerUserData: null,
                isRequesting: false
            };
        default: {
            return state;
        }
    }
};

export default AuthReducer;