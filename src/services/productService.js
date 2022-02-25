import http from './commonHttp';
const uri = 'products';
const createProduct = (product)=>{
    return http.post(uri,product);
}

const fetchProducts = () => {
    return http.get(uri);
}

const productService = {
    createProduct,
    fetchProducts
};

export default productService;