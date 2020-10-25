import axios from 'axios';

export const getDayOneWorkout = (
    values
) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/details_by_user',
            values).then(res => {
                // console.log('Upload user data success: ', res.data)
                resolve(res.data);
            }).catch(ex => {
                reject(ex);
            })
    });

export const getDayOneFoodPlans = (
    values
) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/nutrition_dayone',
            values).then(res => {
                // console.log('Upload user data success: ', res.data)
                resolve(res.data);
            }).catch(ex => {
                reject(ex);
            })
    });

export const getFoodPlansByDay = (
    values
) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/getnutritionbyday',
            values).then(res => {
                // console.log('Upload user data success: ', res.data)
                resolve(res.data);
            }).catch(ex => {
                reject(ex);
            })
    });

export const cancelPlan = (
    values
) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/cancelworkoutbyuser',
            values).then(res => {
                console.log('Cancel plan called: ',res.data)
                resolve(res.data);
            }).catch(ex => {
                reject(ex.response);
            })
    });

export const nextDayWorkout = (
    values
) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/getexercisebyday',
            values).then(res => {
                resolve(res.data);
            }).catch(ex => {
                reject(ex);
            })
    });

export const submitIndividualWorkout = (values) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/updateexercisedetailsbyuser',
            values).then(res => {
                // console.log('submit individual success: ',res);
                resolve(res.data);
            }).catch(ex => {
                reject(ex.response);
            })
    });

export const submitWorkout = (
    values
) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/updateexercisebyuser',
            values).then(res => {
                resolve(res.data);
            }).catch(ex => {
                reject(ex.response);
            })
    });

export const alternateExercises = (
    values
) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/getalternateexercisebyuser',
            values).then(res => {
                resolve(res);
            }).catch(ex => {
                reject(ex);
            })
    });

export const getAlternateExerciseById = (
    values
) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/getalternateexercisebyuserbyid',
            values).then(res => {
                resolve(res);
            }).catch(ex => {
                reject(ex.response);
            })
    });
