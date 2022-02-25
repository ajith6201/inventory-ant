import { ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE } from "../types";
import productService from "../../../services/productService";


    const addProduct = inputValues => async(dispatch) => {
        try {
            
            let res = await productService.createProduct(inputValues);

            let successMessage = res.data.message;
            
            dispatch({
                type:ADD_PRODUCT_SUCCESS,
                payload:{inputValues,successMessage}
            });
    
            return Promise.resolve(successMessage);
        } catch (error) {
            dispatch({
                type:ADD_PRODUCT_FAILURE,
                payload:error
            });
            return Promise.reject(error);
        }
    };

    export default addProduct;