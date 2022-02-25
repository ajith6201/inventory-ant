import http from './commonHttp';

const uri = 'category';

const createCategory = (category)=>{
    //return http.post('createCategories.php',category);
    return http.post(uri,category);
}

const fetchCategories = () => {
    //return http.get('fetchCategories.php');
    return http.get(uri);
}

const deleteCategories = (id) =>{
    return http.delete(uri+'/'+id);
}

const updateCategories = (id,category) =>{
    return http.put(uri+'/'+id,category);
}

const categoryService = {
    createCategory,
    fetchCategories,
    deleteCategories,
    updateCategories
};

export default categoryService;