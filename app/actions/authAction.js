import authTypes from '../reducers/auth/types';
import Axios from 'axios';
import { getGlobalLeaderBoardAPI } from '../reducers/auth/service-calls';

export const resetRegister = () => {
    return (dispatch, getState) => {
        dispatch({
            type: authTypes.RESET_REGISTER,
        });
    };
};

export const registerUser = (PersonalDetails) => {
    return (dispatch) => {
        dispatch({
            type: authTypes.REGISTER_REQUESTING
        });
        Axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/userdetails', PersonalDetails)
            .then(data => {
                console.log('Register success: ', data.data);
                dispatch({
                    type: authTypes.REGISTER_USER_SUCCESS,
                    registerUserData: data.data,
                });
            })
            .catch(error => {
                console.log('Register user error: ', (error.response.data.data));
                dispatch({
                    type: authTypes.REGISTER_USER_FAILED,
                    registerError: error.response.data.data.first_name,
                });
            });
    };
};

export const getGlobalLeaderBoard = (values) => {
    return (dispatch) => {
        dispatch({
            type: authTypes.REGISTER_REQUESTING
        });
        getGlobalLeaderBoardAPI(valuess)
            .then(res => {
                console.log('Get global leaderboard success: ', res);
                // dispatch({
                //     type: authTypes.REGISTER_USER_SUCCESS,
                //     registerUserData: data.data,
                // });
            })
            .catch(error => {
                console.log('Get leaderboard error: ', (error.response.data.data));
                // dispatch({
                //     type: authTypes.REGISTER_USER_FAILED,
                //     registerError: error.response.data.data.first_name,
                // });
            });
    };
};