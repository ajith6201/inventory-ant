import { ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE } from "../types";
import categoryService from "../../../services/categoryService";

export const addCategory = category => async (dispatch) => {
    try {
        const res = await categoryService.createCategory(category);

        let successMessage = res.data.message;

        let categories = {
          id:res.data[0]['id'],
          category:res.data[0]['category'],
          status:res.data[0]['status'],
          key:res.data[0]['id']
        };

        dispatch({
          type: ADD_CATEGORY_SUCCESS,
          payload: {categories, successMessage},
        });
    
        return Promise.resolve(res.data);
      } catch (err) {
        dispatch({
            type:ADD_CATEGORY_FAILURE,
            payload:err
        });
        return Promise.reject(err);
      }
  };