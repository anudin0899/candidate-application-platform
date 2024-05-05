import { FETCH_JOBS_FAILURE, FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS } from "../Actions/constant";


const initialState = {
    jobs: [],
    loading: false,
    error: null
};

export const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: action.payload,
                error: null
            };
        case FETCH_JOBS_FAILURE:
            return {
                ...state,
                loading: false,
                jobs: [],
                error: action.payload
            };
        default:
            return state;
    }
};
