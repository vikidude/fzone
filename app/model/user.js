export let PersonalDetails = {
    user_id: '',
    email: null,
    name: "",
    address: null,
    display_name: null,
    password: null,
    gender: "",
    city: null,
    state: null,
    mobile_no: null,
    age: "",
    height: "",
    weight: "",
    medicalcondition: "",
    activitylevel: ""
}

export let activity_level = {
    id: null,
    activity_name: '',
    activity_description: '',
    status: null,
    issynced: null,
    issynceddate: null,
    created_by: null,
    created_at: null,
    updated_by: null,
    updated_at: null,
    deleted_by: null,
    deleted_at: null
}

export let workout_frequency = {
    id: null,
    workout_schedule: '',
    workout_schedule_description: '',
    workout_schedule_count: null,
    status: null,
    issynced: null,
    issynceddate: null,
    created_by: null,
    created_at: null,
    updated_by: null,
    updated_at: null,
    deleted_by: null,
    deleted_at: null
}

export let UserDetails = {
    user_id: '',
    workout_frequency_id: '',
    goal_id: '',
    workout_plan_id: '',
    workout_type_id: '',
    registerdDate: ''
}

export function resetUserDetails() {
    UserDetails.user_id ='',
    UserDetails.workout_frequency_id = '',
    UserDetails.goal_id = '',
    UserDetails.workout_plan_id = '';
    UserDetails.workout_type_id = '';
}