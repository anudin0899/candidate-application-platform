import { FETCH_JOBS_FAILURE, FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS } from "./constant"


export const fetchJobs = (limit = 10) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_JOBS_REQUEST });
        try {
            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "limit": limit,
                    "offset": 0
                })
            });
            const data = await response.json();
            dispatch({
                type: FETCH_JOBS_SUCCESS,
                payload: data.jdList
            });

        } catch (error) {
            dispatch({
                type: FETCH_JOBS_FAILURE,
                payload: error.message
            });
        }
    };
};