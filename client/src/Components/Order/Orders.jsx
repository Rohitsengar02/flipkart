import { Box, Typography, makeStyles, InputBase, IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { ArrowBack, Search, FilterList, ChevronRight, StarBorder } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#fff',
        minHeight: '100vh',
        [theme.breakpoints.up('md')]: {
            background: '#f1f3f6',
            marginTop: 55,
            padding: '20px 0'
        }
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        background: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid #f0f0f0',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        background: '#fff',
        borderBottom: '1px solid #f0f0f0'
    },
    searchBox: {
        background: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: 4,
        padding: '2px 10px',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        marginRight: 15
    },
    orderItem: {
        padding: '15px',
        display: 'flex',
        alignItems: 'flex-start',
        borderBottom: '1px solid #f0f0f0',
        cursor: 'pointer',
        background: '#fff',
        '&:hover': { background: '#fafafa' },
        [theme.breakpoints.up('md')]: {
            maxWidth: 1000,
            margin: '0 auto',
            border: '1px solid #f0f0f0',
            marginBottom: 10
        }
    },
    productImage: {
        width: 60,
        height: 60,
        objectFit: 'contain',
        marginRight: 15
    },
    orderContent: {
        flex: 1
    },
    statusText: {
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 4
    },
    deliveryStatus: {
        color: '#212121'
    },
    refundStatus: {
        color: '#388e3c'
    },
    cancelStatus: {
        color: '#212121'
    },
    subText: {
        fontSize: 13,
        color: '#666',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '80%'
    },
    ratingSection: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10
    },
    stars: {
        display: 'flex',
        gap: 2,
        color: '#d1d1d1'
    },
    rateText: {
        fontSize: 12,
        color: '#666',
        marginTop: 4
    },
    desktopTitle: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            maxWidth: 1000,
            margin: '0 auto 15px',
            fontSize: 18,
            fontWeight: 600
        }
    }
}));

const Orders = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.getProducts);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(getProducts());
        }
    }, [dispatch, products]);

    useEffect(() => {
        if (products && products.length > 0) {
            const mockOrders = [
                {
                    item: products[0],
                    status: 'Delivered',
                    date: 'Jan 23',
                    sub: 'Minutes Basket (1 item)',
                    type: 'delivery'
                },
                {
                    item: products[1],
                    status: 'Refund completed',
                    date: '',
                    sub: products[1].title.longTitle,
                    type: 'refund'
                },
                {
                    item: products[2],
                    status: 'Delivered',
                    date: 'Apr 05, 2025',
                    sub: products[2].title.longTitle,
                    type: 'delivery',
                    showRating: true
                },
                {
                    item: products[3],
                    status: 'Delivered',
                    date: 'Mar 06, 2025',
                    sub: products[3].title.longTitle,
                    type: 'delivery',
                    showRating: true
                },
                {
                    item: products[4],
                    status: 'Cancelled',
                    date: 'Feb 28, 2025',
                    sub: products[4].title.longTitle,
                    type: 'cancel'
                },
                {
                    item: products[5],
                    status: 'Cancelled',
                    date: 'Jan 08, 2025',
                    sub: products[5].title.longTitle,
                    type: 'cancel'
                }
            ];
            setOrders(mockOrders);
        }
    }, [products]);

    return (
        <Box className={classes.component}>
            {/* Mobile Header */}
            <Box className={classes.header}>
                <IconButton onClick={() => history.goBack()} style={{ padding: 8 }}>
                    <ArrowBack />
                </IconButton>
                <Typography style={{ fontSize: 18, fontWeight: 600, marginLeft: 10 }}>My Orders</Typography>
            </Box>

            {/* Desktop Title */}
            <Typography className={classes.desktopTitle}>My Orders</Typography>

            {/* Search and Filters */}
            <Box className={classes.searchContainer}>
                <Box className={classes.searchBox}>
                    <Search style={{ color: '#878787', fontSize: 20 }} />
                    <InputBase
                        placeholder="Search your order here"
                        style={{ marginLeft: 10, flex: 1, fontSize: 14 }}
                    />
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <FilterList style={{ fontSize: 20 }} />
                    <Typography style={{ fontSize: 14, fontWeight: 500, marginLeft: 5 }}>Filters</Typography>
                </Box>
            </Box>

            {/* Orders List */}
            <Box>
                {orders.map((order, index) => (
                    <Box key={index} className={classes.orderItem}>
                        <img src={order.item.url} className={classes.productImage} alt="" />

                        <Box className={classes.orderContent}>
                            <Typography className={`${classes.statusText} ${order.type === 'refund' ? classes.refundStatus :
                                    order.type === 'cancel' ? classes.cancelStatus :
                                        classes.deliveryStatus
                                }`}>
                                {order.status} {order.date && `on ${order.date}`}
                            </Typography>

                            <Typography className={classes.subText}>
                                {order.sub}
                            </Typography>

                            {order.showRating && (
                                <Box className={classes.ratingSection}>
                                    <Box className={classes.stars}>
                                        {[1, 2, 3, 4, 5].map(s => <StarBorder key={s} style={{ fontSize: 24 }} />)}
                                    </Box>
                                    <Typography className={classes.rateText}>Rate this product now</Typography>
                                </Box>
                            )}
                        </Box>

                        <ChevronRight style={{ color: '#878787', marginLeft: 10 }} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Orders;
