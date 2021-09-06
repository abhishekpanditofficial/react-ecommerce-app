import CategoryActionsTypes from './category.types';

const INITIAL_STATE= {
    currentCategory: "Fish",
    city:"collections"
}


const categoryReducer= (state= INITIAL_STATE,action)=>{
    switch(action.type){
    case CategoryActionsTypes.UPDATE_CURRENT_CATEGORY:
        return{
            ...state,
            currentCategory: action.payload
        };
    case CategoryActionsTypes.UPDATE_CURRENT_CITY:
        return{
            ...state,
            city: "collections"
        }
    default:
        return state;
    }
};

export default categoryReducer;