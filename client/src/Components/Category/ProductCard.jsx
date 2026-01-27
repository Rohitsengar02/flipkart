import { Box, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const useStyles = makeStyles({
    component: {
        cursor: 'pointer',
        padding: 15,
        border: '1px solid #f0f0f0',
        borderRadius: 2,
        background: '#FFFFFF',
        '&:hover': {
            boxShadow: '0 2px 4px 0 rgba(0,0,0,.08)'
        },
        transition: 'all 0.3s ease'
    },
    container: {
        textAlign: 'center',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block'
    },
    image: {
        width: '100%',
        height: 200,
        objectFit: 'contain',
        marginBottom: 10
    },
    sponsored: {
        fontSize: 10,
        color: '#878787',
        marginBottom: 5,
        textTransform: 'uppercase'
    },
    brand: {
        fontSize: 14,
        fontWeight: 500,
        color: '#212121',
        marginBottom: 5,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    title: {
        fontSize: 12,
        color: '#878787',
        marginBottom: 10,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    priceContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 5
    },
    price: {
        fontSize: 16,
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
    tag: {
        fontSize: 12,
        color: '#388e3c',
        fontWeight: 500
    },
    assuredContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginTop: 5
    },
    assuredIcon: {
        fontSize: 16,
        color: '#2874f0'
    },
    assuredText: {
        fontSize: 11,
        color: '#878787'
    }
});

const ProductCard = ({ product }) => {
    const classes = useStyles();
    const addEllipsis = (text) => {
        if (text.length > 50) {
            return text.substring(0, 50) + '...';
        }
        return text;
    };

    return (
        <Box className={classes.component}>
            <Link to={`/product/${product.id}`} className={classes.container}>
                <Typography className={classes.sponsored}>Sponsored</Typography>
                <img src={product.url} alt={product.title.shortTitle} className={classes.image} />
                <Typography className={classes.brand}>
                    {product.title.shortTitle}
                </Typography>
                <Typography className={classes.title}>
                    {addEllipsis(product.title.longTitle)}
                </Typography>
                <Box className={classes.priceContainer}>
                    <Typography className={classes.price}>₹{product.price.cost}</Typography>
                    <Typography className={classes.mrp}>₹{product.price.mrp}</Typography>
                    <Typography className={classes.discount}>{product.price.discount} off</Typography>
                </Box>
                <Box className={classes.assuredContainer}>
                    <VerifiedUserIcon className={classes.assuredIcon} />
                    <Typography className={classes.assuredText}>Assured</Typography>
                </Box>
                {product.tagline && (
                    <Typography className={classes.tag}>{product.tagline}</Typography>
                )}
            </Link>
        </Box>
    );
};

export default ProductCard;
