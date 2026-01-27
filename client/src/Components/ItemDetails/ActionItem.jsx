import { useState, useEffect } from 'react';
import { Button, Box, makeStyles } from '@material-ui/core';
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { loadRazorpay } from '../../razorpay/loadPayment';

const useStyle = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '20px 0'
        }
    },
    imageContainer: {
        display: 'flex',
        gap: 15,
        marginBottom: 20,
        [theme.breakpoints.down('sm')]: {
            gap: 5
        }
    },
    thumbnailContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    thumbnail: {
        width: 60,
        height: 60,
        border: '1px solid #f0f0f0',
        cursor: 'pointer',
        objectFit: 'contain',
        '&:hover': {
            border: '2px solid #2874f0'
        }
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '100%',
        maxWidth: 450,
        height: 450,
        objectFit: 'contain'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50,
        [theme.breakpoints.down('sm')]: {
            width: '48%'
        }
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF',
        fontWeight: 600
    },
    buyNow: {
        background: '#fb641b',
        color: '#FFF',
        fontWeight: 600
    }
}));

const ActionItem = ({ product }) => {
    const classes = useStyle();
    const history = useHistory();
    const { id } = product;
    const [selectedImage, setSelectedImage] = useState(product.detailUrl);

    const dispatch = useDispatch();

    useEffect(() => {
        setSelectedImage(product.detailUrl);
    }, [product]);

    const buyNow = async () => {
        loadRazorpay(600);
    }

    const addItemToCart = () => {
        dispatch(addToCart(id, 1));
        history.push('/cart');
    }

    // Dummy images for gallery (reusing main image for demo)
    const images = Array(5).fill(product.detailUrl);

    return (
        <Box className={classes.leftContainer}>
            <Box className={classes.imageContainer}>
                <Box className={classes.thumbnailContainer}>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            className={classes.thumbnail}
                            onClick={() => setSelectedImage(img)}
                            alt={`thumbnail-${index}`}
                            style={{ border: selectedImage === img ? '2px solid #2874f0' : '' }}
                        />
                    ))}
                </Box>
                <Box style={{ flex: 1 }}>
                    <img src={selectedImage} className={classes.productImage} alt="product" />
                </Box>
            </Box>
            <Button onClick={() => addItemToCart()} className={clsx(classes.button, classes.addToCart)} style={{ marginRight: 10 }} variant="contained"><Cart />Add to Cart</Button>
            <Button onClick={() => buyNow()} className={clsx(classes.button, classes.buyNow)} variant="contained"><Flash /> Buy Now</Button>
        </Box>
    )
}

export default ActionItem;