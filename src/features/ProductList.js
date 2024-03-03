import {useQueryParam, StringParam} from 'use-query-params';
import { productsUtil, productMetaMap} from '../api/products'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function ProductList () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const [category] = useQueryParam('category', StringParam);

    useEffect(() => {
        productsUtil(category, dispatch)
    }, [category, dispatch]);

    return(
        <div>
            <h1>Showing {category}</h1>
            <div className = 'products'>
                {products.map(productMetaMap(navigate, 'active'))}
            </div>
        </div>
    )
}