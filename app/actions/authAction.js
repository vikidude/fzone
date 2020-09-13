import authTypes from '../reducers/auth/types';
import Axios from 'axios';

export const resetRegister = () => {
    return (dispatch, getState) => {
        dispatch({
            type: authTypes.RESET_REGISTER,
        });
    };
};

export const registerUser = (PersonalDetails) => {
    return (dispatch, getState) => {
        Axios.post('http://ttci-demo.com:10/tfz_web/tfzapi_user/public/api/mobile/userdetails',PersonalDetails)
            .then(data => {
                // console.log('Register success: ', data);
                dispatch({
                    type: authTypes.REGISTER_USER_SUCCESS,
                    registerUserData: data,
                });
            })
            .catch(error => {
                console.log('Register user error: ', (error.response.data.data));
                dispatch({
                    type: authTypes.REGISTER_USER_FAILED,
                    registerError: error.response.data.data,
                });
            });
    };
};