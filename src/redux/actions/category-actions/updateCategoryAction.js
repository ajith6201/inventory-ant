import { UPDATE_CATEGORY_SUCCESS, UPDATE_CATEGORY_FAILURE } from '../types';
import categoryService from '../../../services/categoryService';

export const updateCategory = (id,category) => async (dispatch) => {
    try {
        const res = await categoryService.updateCategories(id,category);

        let successMessage = res.data.message;
    
        dispatch({
          type: UPDATE_CATEGORY_SUCCESS,
          payload: {id,category, successMessage},
        });
    
        return Promise.resolve(res.data);
      } catch (err) {console.log(err);
        dispatch({
            type:UPDATE_CATEGORY_FAILURE,
            payload:err
        });
        return Promise.reject(err);
      }
  };