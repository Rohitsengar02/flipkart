import { Box, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Star, FavoriteBorder } from '@material-ui/icons';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    component: {
        cursor: 'pointer',
        borderBottom: '1px solid #f0f0f0',
        background: '#FFFFFF',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            padding: 15,
            border: '1px solid #f0f0f0',
            display: 'inline-block',
            width: '100%'
        }
    },
    container: {
        display: 'flex',
        textDecoration: 'none',
        color: 'inherit',
        padding: '15px 10px',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column',
            textAlign: 'center'
        }
    },
    leftContainer: {
        width: '35%',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            width: '100%'
        }
    },
    rightContainer: {
        width: '65%',
        paddingLeft: 10,
        [theme.breakpoints.up('md')]: {
            width: '100%',
            paddingLeft: 0,
            marginTop: 10
        }
    },
    image: {
        width: '100%',
        height: 140,
        objectFit: 'contain',
        [theme.breakpoints.up('md')]: {
            height: 200
        }
    },
    favoriteIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: '#d1d1d1',
        fontSize: 24,
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    bestSeller: {
        position: 'absolute',
        top: 0,
        left: 0,
        background: '#008cff',
        color: '#fff',
        fontSize: 10,
        fontWeight: 600,
        padding: '2px 6px',
        borderRadius: '0 0 4px 0',
        zIndex: 1
    },
    title: {
        fontSize: 15,
        lineHeight: '20px',
        color: '#212121',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        [theme.breakpoints.up('md')]: {
            fontSize: 12,
            color: '#878787',
            whiteSpace: 'nowrap'
        }
    },
    ratingContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 5,
        gap: 5
    },
    ratingBox: {
        background: '#388e3c',
        color: '#fff',
        padding: '2px 4px',
        borderRadius: 3,
        fontSize: 12,
        display: 'flex',
        alignItems: 'center',
        fontWeight: 500
    },
    ratingText: {
        color: '#878787',
        fontSize: 12
    },
    fassured: {
        width: 60,
        marginLeft: 5
    },
    priceContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 5,
        gap: 8
    },
    price: {
        fontSize: 18,
        fontWeight: 600,
        color: '#212121'
    },
    mrp: {
        fontSize: 14,
        color: '#878787',
        textDecoration: 'line-through'
    },
    discount: {
        fontSize: 14,
        color: '#388e3c',
        fontWeight: 500
    },
    bankOffer: {
        fontSize: 12,
        color: '#2874f0',
        fontWeight: 500,
        marginTop: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 5
    },
    exchangeOffer: {
        fontSize: 12,
        color: '#212121',
        marginTop: 5
    },
    tagContainer: {
        display: 'flex',
        gap: 5,
        marginTop: 8,
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    tag: {
        fontSize: 11,
        color: '#878787',
        border: '1px solid #e0e0e0',
        padding: '2px 8px',
        borderRadius: 4
    }
}));

const ProductCard = ({ product }) => {
    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    return (
        <Box className={classes.component}>
            <Link to={`/product/${product.id}`} className={classes.container}>
                <Box className={classes.leftContainer}>
                    {product.id === 'product1' && <Box className={classes.bestSeller}>BESTSELLER</Box>}
                    <img src={product.url} alt={product.title.shortTitle} className={classes.image} />
                </Box>

                <Box className={classes.rightContainer}>
                    <FavoriteBorder className={classes.favoriteIcon} />
                    <Typography className={classes.title}>
                        {product.title.longTitle}
                    </Typography>

                    <Box className={classes.ratingContainer}>
                        <Box className={classes.ratingBox}>4.1 <Star style={{ fontSize: 12, marginLeft: 2 }} /></Box>
                        <Typography className={classes.ratingText}>(1,10,824)</Typography>
                        <img src={fassured} className={classes.fassured} alt="fassured" />
                    </Box>

                    <Box className={classes.priceContainer}>
                        <Typography className={classes.price}>₹{product.price.cost.toLocaleString()}</Typography>
                        <Typography className={classes.mrp}>₹{product.price.mrp.toLocaleString()}</Typography>
                        <Typography className={classes.discount}>{product.price.discount} off</Typography>
                    </Box>

                    <Typography className={classes.bankOffer}>
                        <Box component="span" style={{ background: '#2874f0', color: '#fff', padding: '0 4px', borderRadius: 2, fontSize: 10 }}>WOW!</Box>
                        ₹{Math.floor(product.price.cost * 0.9).toLocaleString()} with Bank offer
                    </Typography>

                    <Typography className={classes.exchangeOffer}>Upto ₹{Math.floor(product.price.cost * 0.15).toLocaleString()} Off on Exchange</Typography>

                    <Box className={classes.tagContainer}>
                        <Box className={classes.tag}>700 rpm Max Speed</Box>
                        <Box className={classes.tag}>5 Star Rating</Box>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};

export default ProductCard;

