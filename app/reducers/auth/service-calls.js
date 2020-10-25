import axios from 'axios';

export const getPersonalDetails = (user_id) =>
    new Promise((resolve, reject) => {
        axios.post(' http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/getpersoneldetails', user_id)
            .then(res => {
                resolve(res);
            }).catch(ex => {
                reject(ex.response)
            })
    })

export const updatePersonalDetails = (values) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/updatepersoneldetails', values)
            .then(res => {
                resolve(res);
            }).catch(ex => {
                reject(ex.response)
            })
    })

export const getProfileDetails = (user_id) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/getprofiledetails', user_id)
            .then(res => {
                resolve(res);
            }).catch(ex => {
                reject(ex.response)
            })
    })

export const updateProfileDetails = (values) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/updateprofiledetails', values)
            .then(res => {
                resolve(res);
            }).catch(ex => {
                reject(ex.response.data)
            })
    })

export const getGlobalLeaderBoardAPI = (user_id) =>
    new Promise((resolve, reject) => {
        axios.post('http://ttci-uat.com:10/tfz_web/tfzapi_user/public/api/mobile/global_leaderboard', user_id)
            .then(res => {
                resolve(res);
            }).catch(ex => {
                reject(ex.response)
            })
    })