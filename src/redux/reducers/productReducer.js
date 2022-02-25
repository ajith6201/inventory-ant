import { ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    FETCH_PRODUCT_STARTED,
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_SUCCESS } from '../actions/types';

    const initialState = {
        products: [],
        loading: false,
        error: null,
        success: null
    };

    const productReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_PRODUCT_SUCCESS:
                return {...state,
                products:action.payload.inputValues,
                loading:false,
                error:null,
                success:action.payload.successMessage};
            case ADD_PRODUCT_FAILURE:
                return {
                    ...state,
                    error:action.payload.error,
                    loading:false,
                    success:null
                };
                case FETCH_PRODUCT_STARTED:
                    return {
                        ...state,
                        error:null,
                        loading:true,
                        success:null
                    };
                case FETCH_PRODUCT_FAILURE:
                    return {
                        ...state,
                        error:action.payload.err,
                        loading:false,
                        success:null
                    };
                case FETCH_PRODUCT_SUCCESS:
                    return {
                        ...state,
                        products: action.payload.products,
                        loading:false,
                        success:action.payload.message,
                        error:null
                    };
            default:
                return state;
        }
    };

    export default productReducer;