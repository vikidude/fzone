import workoutTypes from './types';

let initialState = {
    activityLoading: false,
    activityMedicalData: [],
    workoutFreqData: [],
    goals: [],
    workoutType: [],
    workoutPlans: [],
    workout_day: null,
    alternate_exercise: [],
    isAlternateSet: false,
    picked_alternate: null,
};

const WorkoutReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case workoutTypes.ALTERNATE_PICKED:
            const { isAlternateSet, picked_alternate } = actions;
            // console.log('caled: ',isAlternateSet)
            return { ...state, picked_alternate, isAlternateSet };

        case workoutTypes.SET_ALTERNATE_EXERCISE:
            const { alternate_exercise } = actions;
            return { ...state, alternate_exercise };

        case workoutTypes.SET_WORKOUT_DAY:
            const { workout_day } = actions;
            return { ...state, workout_day };
            
        case workoutTypes.GET_ACTIVITY_AND_MEDICAL_DETAILS_STARTED:
            return { ...state, activityLoading: true, activityMedicalData: [] };
        case workoutTypes.GET_ACTIVITY_AND_MEDICAL_DETAILS_SUCCESS:
            const { activityMedicalData } = actions;
            return { ...state, activityMedicalData, activityLoading: false };
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