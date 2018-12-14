const initialState = {
    cities: [],
    loading: false,
    error: null,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_CITIES_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            };

        case "FETCH_CITIES_SUCCESS":
            return {
                ...state,
                loading: false,
                cities: action.payload.cities
            };

        case "FETCH_CITIES_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                cities: []
            };

        default:
            return state;
    }
}
