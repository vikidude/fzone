import workoutTypes from './types';

let initialState = {
    activityLoading: false,
    activityMedicalData: [],
    workoutFreqData: [],
    goals: [],
    workoutType: [],
    workoutPlans: [],
};

const WorkoutReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case workoutTypes.GET_ACTIVITY_AND_MEDICAL_DETAILS_STARTED:
            return { ...state, activityLoading:true,activityMedicalData:[] };
        case workoutTypes.GET_ACTIVITY_AND_MEDICAL_DETAILS_SUCCESS:
            const { activityMedicalData } = actions;
            return { ...state, activityMedicalData,activityLoading:false };
        case workoutTypes.GET_WORKOUT_FREQUENCY_SUCCESS:
            const { workoutFreqData } = actions;
            return {
                ...state,
                workoutFreqData
            };
        case workoutTypes.GET_WORKOUT_TYPE_SUCCESS:
            const { workoutType } = actions;
            return {
                ...state,
                workoutType
            };
        case workoutTypes.GET_GOALS_BY_ID_SUCCESS:
            const { goals } = actions;
            return {
                ...state,
                goals
            };
        case workoutTypes.GET_WORKOUT_PLANS_SUCCESS:
            const { workoutPlans } = actions;
            return {
                ...state,
                workoutPlans
            };
        default: {
            return state;
        }
    }
};

export default WorkoutReducer;