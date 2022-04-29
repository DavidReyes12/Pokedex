// Constants
const initData = {
    pokemonData: {},
};

// Types
const SET_POKEMONDATA = "SET_POKEMONDATA";

// Reducer
export default function mainpageReducer( state = initData, action ){
    switch (action.type) {
        case SET_POKEMONDATA:
            return { ...state, pokemonData: action.payload };
        default:
            return state;
    }
};

// Actions
export const setPokemonData = ( payload ) => ( dispatch, getState ) => {
    dispatch({
        type: SET_POKEMONDATA,
        payload,
    });
};