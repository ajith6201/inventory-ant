import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_STARTED } from "../types";
import categoryService from "../../../services/categoryService";

export const fetchCategories = () => async (dispatch) => {
    try {
        dispatch({type: FETCH_CATEGORIES_STARTED});

        const res = await categoryService.fetchCategories();

        let successMessage = res.data.message;
        
        let categories = res.data.map(row=>({
          id:row.id,
          category:row.category,
          status:row.status,
          key:row.id
        }));
    
        dispatch({
          type: FETCH_CATEGORIES_SUCCESS,
          payload: {categories, successMessage},
        });
    
        return Promise.resolve(successMessage);
      } catch (err) {
        dispatch({
            type:FETCH_CATEGORIES_FAILURE,
            payload:err
        });
        return Promise.reject(err);
      }
  };
