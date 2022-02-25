import { DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE } from "../types";
import categoryService from "../../../services/categoryService";

export const deleteCategories = (id) => async(dispatch) =>{
    try {
        const res = await categoryService.deleteCategories(id);

        let successMessage = res.data.message;        
    
        dispatch({
          type: DELETE_CATEGORY_SUCCESS,
          payload: {id, successMessage},
        }); 

        return Promise.resolve(successMessage);
        
    } catch (err) {
        dispatch({
            type:DELETE_CATEGORY_FAILURE,
            payload:err
        });
        return Promise.reject(err);
        
    }
}