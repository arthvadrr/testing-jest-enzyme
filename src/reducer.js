export const initialState = {
    repositories: [],
    loading: false,
    error: null,
};

export const actionTypes = {
    FETCH_REQUEST: 'FETCH_REQUEST',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REQUEST:
            return { ...state, loading: true, error: null };
        case actionTypes.FETCH_SUCCESS:
            return { ...state, loading: false, repositories: action.payload };
        case actionTypes.FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default reducer;