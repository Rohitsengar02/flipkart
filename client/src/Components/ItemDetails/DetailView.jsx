import { useState, useEffect, useMemo } from 'react';
import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails, getProducts as listProducts } from '../../redux/actions/productActions';
import Slide from '../Home/Slide';
import { addToRecent, getRecentIds } from '../../utils/recent';
import { getShuffleProducts } from '../../utils/shuffle';

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0,
            padding: '0 10px'
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    },
    ratingBox: {
        background: '#388e3c',
        color: '#fff',
        padding: '2px 6px',
        borderRadius: 4,
        fontSize: 12,
        display: 'inline-flex',
        alignItems: 'center',
        marginRight: 8
    }
}));

const data = {
    id: '',
    url: '',
    detailUrl: '',
    title: {
        shortTitle: '',
        longTitle: '',
    },
    price: {
        mrp: 0,
        cost: 0,
        discount: ''
    },
    description: '',
    discount: '',
    tagline: ''
};

const DetailView = ({ history, match }) => {
    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const [product, setProduct] = useState(data);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();



    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    // Memoize the shuffled/recent lists to prevent re-shuffling on every render
    const recentData = useMemo(() => products.filter(p => getRecentIds().includes(p.id)), [products]);
    const topSelectionData = useMemo(() => getShuffleProducts(products, 7), [products]);
    const recommendedData = useMemo(() => getShuffleProducts(products, 7), [products]);

    useEffect(() => {
        if (product && match.params.id !== product.id)
            dispatch(getProductDetails(match.params.id));

        dispatch(listProducts());
    }, [dispatch, product, match, loading]);


    useEffect(() => {
        const getProductValues = async () => {
            setLoading(true);
            const response = await getProductById(id);
            setProduct(response.data);
            addToRecent(response.data.id);
            setLoading(false);
        }
        getProductValues();
    }, [id]);

    return (
        <Box className={classes.component}>
            <Box></Box>
            {product && Object.keys(product).length &&
                <Grid container className={classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>


                        <Typography>{product.title.longTitle}</Typography>
                        <Box style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                            <span className={classes.ratingBox}>4.5 <Star style={{ fontSize: 10, marginLeft: 2 }} /></span>
                            <Typography className={clsx(classes.greyTextColor, classes.smallText)}>
                                124 Ratings & 15 Reviews
                            </Typography>
                            <span><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="" /></span>
                        </Box>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: 40 }}>
                        <Slide data={recentData} title='Recently Viewed' timer={false} multi={true} />
                        <Slide data={topSelectionData} title='Top Best Sellers' timer={false} multi={true} />
                        <Slide data={recommendedData} title='More Products' timer={false} multi={true} />
                    </Grid>
                </Grid>
            }
        </Box>
    )
}

export default DetailView;