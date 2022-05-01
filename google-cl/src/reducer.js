export const initialState ={
    term: null,
}


export const actionsType ={
    SET_SEARCH_TERM: "SET_SEARCH_TERM"
}


const reducer = (state, action) => {
    console.log(action)

    switch(action.type){
        
        case actionsType.SET_SEARCH_TERM:
           
            return{
                ...state,
                term: action.term,
            }

            default:
                return state;
    }

}


export default reducer;