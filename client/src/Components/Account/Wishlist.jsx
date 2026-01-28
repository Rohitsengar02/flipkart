import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';
import { Delete, Star } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { getProducts } from '../../redux/actions/productActions';

const useStyles = makeStyles(theme => ({
    component: {
        padding: '30px 135px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
    },
    leftComponent: {
        width: '100%',
        paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            paddingRight: 0
        }
    },
    header: {
        padding: '15px 24px',
        background: '#fff',
        borderBottom: '1px solid #f0f0f0'
    },
    container: {
        background: '#fff',
        padding: '24px',
        display: 'flex',
        borderBottom: '1px solid #f0f0f0',
        [theme.breakpoints.down('sm')]: {
            padding: '15px'
        }
    },
    image: {
        width: 100,
        height: 100,
        objectFit: 'contain'
    },
    rightContainer: {
        marginLeft: 20,
        flex: 1
    },
    remove: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 600,
        cursor: 'pointer',
        color: '#212121',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        '&:hover': { color: '#2874f0' }
    },
    ratingBox: {
        background: '#388e3c',
        color: '#fff',
        padding: '2px 4px',
        borderRadius: 3,
        fontSize: 12,
        display: 'inline-flex',
        alignItems: 'center',
        fontWeight: 500,
        marginTop: 5
    }
}));

const Wishlist = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.getProducts);

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(getProducts());
        }
    }, [dispatch, products]);

    // Show 3 default products from database as wishlist items
    const wishlistItems = products ? products.slice(0, 3) : [];

    return (
        <Box className={classes.component}>
            <Box className={classes.leftComponent}>
                <Box className={classes.header}>
                    <Typography style={{ fontWeight: 600, fontSize: 18 }}>My Wishlist ({wishlistItems.length})</Typography>
                </Box>
                {
                    wishlistItems.length > 0 ?
                        wishlistItems.map((item, index) => (
                            <Box key={index} className={classes.container}>
                                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Link to={`/product/${item.id}`}>
                                        <img src={item.url} className={classes.image} alt="" />
                                    </Link>
                                </Box>
                                <Box className={classes.rightContainer}>
                                    <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography style={{ fontSize: 16, fontWeight: 500 }} className={classes.titleText}>{item.title.longTitle}</Typography>
                                    </Link>
                                    <Box className={classes.ratingBox}>
                                        4.2 <Star style={{ fontSize: 10, marginLeft: 2 }} />
                                    </Box>
                                    <Box style={{ display: 'flex', alignItems: 'center', marginTop: 10, gap: 10 }}>
                                        <Typography style={{ fontSize: 18, fontWeight: 600 }}>₹{item.price.cost.toLocaleString()}</Typography>
                                        <Typography style={{ fontSize: 14, color: '#878787', textDecoration: 'line-through' }}>₹{item.price.mrp.toLocaleString()}</Typography>
                                        <Typography style={{ fontSize: 14, color: '#388e3c', fontWeight: 600 }}>{item.price.discount} Off</Typography>
                                    </Box>
                                    <Box className={classes.remove}>
                                        <Delete style={{ fontSize: 18 }} /> REMOVE
                                    </Box>
                                </Box>
                            </Box>
                        )) :
                        <Box style={{ background: '#fff', padding: '60px', textAlign: 'center' }}>
                            <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d405a71d-2856-4c2b-b4f-808562474ed7.png?q=90" style={{ width: 200, marginBottom: 20 }} alt="" />
                            <Typography style={{ fontSize: 18, fontWeight: 600 }}>Empty Wishlist</Typography>
                            <Typography style={{ fontSize: 14, color: '#878787', marginTop: 10 }}>You have no items in your wishlist. Start adding!</Typography>
                        </Box>
                }
            </Box>
        </Box>
    );
}

export default Wishlist;
