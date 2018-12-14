export function fetchCitiesWithRedux (){
    return (dispatch) => {
        dispatch(fetchCitiesBegin());
        return fetchCities().then(([response, json]) =>{
            if(response.status === 200){
                dispatch(fetchCitiesSuccess(json))
            }
            else{
                dispatch(fetchCitiesFailure())
            }
        })
    }
};

export const fetchCities = () =>{
    const URL = "http://localhost:5000/cities";
    return fetch(URL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
};

// Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response;
// }

export const fetchCitiesBegin = () => ({
    type: "FETCH_CITIES_BEGIN"
});

export const fetchCitiesSuccess = cities => ({
    type: "FETCH_CITIES_SUCCESS",
    payload: { cities }
});

export const fetchCitiesFailure = error => ({
    type: "FETCH_CITIES_FAILURE",
    payload: { error }
});
