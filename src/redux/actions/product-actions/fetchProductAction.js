import { FETCH_PRODUCT_STARTED, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_SUCCESS} from '../types';
import productService from '../../../services/productService';

export const fetchProduct = () => async(dispatch) =>{
    try {

        dispatch({type: FETCH_PRODUCT_STARTED});

        let res = await productService.fetchProducts();

        let successMessage = res.data.message;

        let products = res.data;

        dispatch({
            type: FETCH_PRODUCT_SUCCESS,
            payload: {products, successMessage},
          });
          return Promise.resolve(successMessage);
    } catch (err) {
        dispatch({
            type:FETCH_PRODUCT_FAILURE,
            payload:err
        });
        return Promise.reject(err);
    }
};