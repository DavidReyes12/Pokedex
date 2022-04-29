// Constants
const initData = {
    isSidebarOpen: false,
};

// Types
const SET_SIDEBAR = "SET_SIDEBAR";

// Reducer
export default function appReducer( state = initData, action ){
    switch (action.type) {
        case SET_SIDEBAR:
            return { ...state, isSidebarOpen: action.payload };
        default:
            return state;
    }
};

// Actions
export const setSidebar = ( payload ) => ( dispatch, getState ) => {
    dispatch({
        type: SET_SIDEBAR,
        payload,
    });
};
