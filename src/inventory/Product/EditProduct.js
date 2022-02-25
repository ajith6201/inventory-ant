import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const EditProduct = () =>{

    const ProductSchema = Yup.object().shape({
        product_name: Yup.string()     
          .min(2, 'Too Short!')     
          .max(50, 'Too Long!')     
          .required('Required'),

          quantity: Yup.string()     
          .min(2, 'Too Short!')     
          .max(50, 'Too Long!')     
          .required('Required'),

          sale_rate: Yup.string()     
          .min(2, 'Too Short!')     
          .max(50, 'Too Long!')     
          .required('Required'),

          net_rate: Yup.string()     
          .min(2, 'Too Short!')     
          .max(50, 'Too Long!')     
          .required('Required'),

          category: Yup.string()     
          .min(2, 'Too Short!')     
          .max(50, 'Too Long!')     
          .required('Required'),

          status: Yup.string()     
          .min(2, 'Too Short!')     
          .max(50, 'Too Long!')     
          .required('Required')
    });



    return(<div className="container px-4">
        <div className="row gx-5">
            <div className="col">
                <h3>Add - Products</h3>
                <div className="card">
                    <div className="card-body">
                        <Formik
                        initialValues={{
                            product_name:'',
                            quantity:'',
                            sale_rate:'',
                            net_rate:'',
                            category:'',
                            status:''
                        }}
                        validationSchema={ProductSchema}
                        onSubmit={(values, { setSubmitting }) => {

                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);}}>

                        <Form>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Product Name</label>
                                <div class="col-sm-10">                                
                                    <Field type="text" className="form-control"  name="product_name" />
                                    <ErrorMessage name="product_name" component="div" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Quantity</label>
                                <div class="col-sm-10">                               
                                    <Field type="text" className="form-control"  name="quantity" />
                                    <ErrorMessage name="quantity" component="div" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Sale Rate</label>
                                <div class="col-sm-10">                                
                                    <Field type="text" className="form-control"  name="sale_rate" />
                                    <ErrorMessage name="sale_rate" component="div" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Net Rate</label>
                                <div class="col-sm-10">                                
                                    <Field type="text" className="form-control"  name="net_rate" />
                                    <ErrorMessage name="net_rate" component="div" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Category</label>
                                <div class="col-sm-10">
                                    <Field as="select" name="status" className="form-control">
                                        <option value="one">One</option>
                                        <option value="two">Two</option>                                    
                                    </Field>
                                </div>                                
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Status</label>
                                <div class="col-sm-10">
                                    <Field as="select" name="status" className="form-control">
                                        <option value="available">Available</option>
                                        <option value="not_available">Not Available</option>                                    
                                    </Field>
                                </div>                                
                            </div>
                        </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default EditProduct;