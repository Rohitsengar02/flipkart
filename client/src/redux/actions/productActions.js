import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        console.log('Hiiiiii')
        const { data } = await axios.get(`${url}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        // Fix: Handle IDs with '-random' suffix (used for demo grid)
        const realId = id.toString().split('-random')[0];
        const { data } = await axios.get(`${url}/product/${realId}`);
        console.log(data);

        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response });

    }
};


export const removeProductDetails = () => (dispatch) => {

    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

};
