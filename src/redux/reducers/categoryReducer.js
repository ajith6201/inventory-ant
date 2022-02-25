import { ADD_CATEGORY_SUCCESS, 
    ADD_CATEGORY_FAILURE,
    FETCH_CATEGORIES_SUCCESS, 
    FETCH_CATEGORIES_FAILURE, 
    FETCH_CATEGORIES_STARTED,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE,
    UPDATE_CATEGORY_SUCCESS, 
    UPDATE_CATEGORY_FAILURE, 
    UPDATE_PRODUCT_FAILURE} from "../actions/types";

const initialState = {
    categories: [],
    loading: false,
    error: null,
    success: null
};

const categoryReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ADD_CATEGORY_SUCCESS:
            return {...state,
                categories: [action.payload.categories, ...state.categories],
                error: null,
                success: action.payload.successMessage};
        case ADD_CATEGORY_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                success: null
            };
        case FETCH_CATEGORIES_STARTED:
            return {
                ...state,
                error:null,
                loading:true,
                success:null
            };
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                error:action.payload.error,
                loading:false,
                success:null
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload.categories,
                loading:false,
                success:action.payload.message,
                error:null
            };
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories:[...state.categories.filter(category => category.key !== action.payload.id )],
                loading:false,
                success:action.payload.message,
                error:null
            };
        case DELETE_CATEGORY_FAILURE:
            return {
                ...state,
                error:action.payload.err,
                loading:false,
                success:null
            };
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: state.categories.map(item=>{
                   
                    if(item.id === action.payload.id)
                    {
                        var obj = action.payload.category;
                        obj.id = action.payload.id;
                        obj.key = action.payload.id;
                        
                        return obj;
                    }
                    return item;
                }),
                error:null,
                loading:false,
                success:action.payload.message
            }
        case UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
                error:action.payload.err,
                loading:false,
                success:null
            }
        default:
            return state;
    }
};

export default categoryReducer;