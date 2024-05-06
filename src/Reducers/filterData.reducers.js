import { UPDATE_FILTER } from "../Actions/constant";

const initialState = {
    roles: [],
    employees: [],
    experience: '',
    remote: [],
    salary: '',
    companyName: ''
};


export const filterReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {

        case UPDATE_FILTER:
            return {
                ...state,
                [action.payload.filterName]: action.payload.value
            };
        default:
            return state;
    }
};