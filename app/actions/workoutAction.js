import workoutTypes from '../reducers/workout/types';
import Axios from 'axios';

export const getActivityDetails = () => {
    return (dispatch, getState) => {
        Axios.get('http://ttci-demo.com:10/tfz_web/tfzapi_user/public/api/mobile/personel_details')
            .then(data => {
                console.log('Activity & Medical data: ', data.data);
                dispatch({
                    type: workoutTypes.GET_ACTIVITY_AND_MEDICAL_DETAILS_SUCCESS,
                    activityMedicalData: data.data,
                });
            })
            .catch(error => {
                console.log('Login Error Message: ', JSON.stringify(error));
                dispatch({
                    type: workoutTypes.GET_ACTIVITY_AND_MEDICAL_DETAILS_FAILED,
                    errorMessage: error,
                });
            });
    };
};

export const getWorkoutFrequency = () => {
    return (dispatch, getState) => {
        Axios.get('http://ttci-demo.com:10/tfz_web/tfzapi_user/public/api/mobile/yourplanner')
            .then(data => {
                console.log('Workout freq: ', data.data);
                dispatch({
                    type: workoutTypes.GET_WORKOUT_FREQUENCY_SUCCESS,
                    workoutFreqData: data.data.workout_frequency,
                });
            })
            .catch(error => {
                console.log('Workout frequency get Error Message: ', JSON.stringify(error));
                dispatch({
                    type: workoutTypes.GET_WORKOUT_FREQUENCY_FAILED,
                    errorMessage: error,
                });
            });
    };
};

export const getWorkoutTypes = () => {
    return (dispatch, getState) => {
        Axios.get('http://ttci-demo.com:10/tfz_web/tfzapi_user/public/api/mobile/workouttype')
            .then(data => {
                console.log('Workout types: ', data.data);
                dispatch({
                    type: workoutTypes.GET_WORKOUT_TYPE_SUCCESS,
                    workoutType: data.data.workout_type,
                });
            })
            .catch(error => {
                console.log('Workout types get Error Message: ', JSON.stringify(error));
                dispatch({
                    type: workoutTypes.GET_WORKOUT_TYPE_FAILED,
                    errorMessage: error,
                });
            });
    };
};

export const getWorkoutPlans = () => {
    return (dispatch, getState) => {
        Axios.get('http://ttci-demo.com:10/tfz_web/tfzapi_user/public/api/mobile/workoutplan')
            .then(data => {
                console.log('Workout plans: ', data.data.workoutplan.length);
                dispatch({
                    type: workoutTypes.GET_WORKOUT_PLANS_SUCCESS,
                    workoutPlans: data.data.workoutplan,
                });
            })
            .catch(error => {
                console.log('Workout types get Error Message: ', JSON.stringify(error));
                dispatch({
                    type: workoutTypes.GET_WORKOUT_PLANS_FAILED,
                    errorMessage: error,
                });
            });
    };
};