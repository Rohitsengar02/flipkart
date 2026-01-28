import { useState, useEffect } from 'react';
import { Button, Box, makeStyles, IconButton, Typography } from '@material-ui/core';
import { ShoppingCart as Cart, FlashOn as Flash, FavoriteBorder, Share, Star } from '@material-ui/icons';
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
            padding: 0,
            background: '#fff',
            paddingBottom: 130 // Padding for sticky bottom bar + bottom navigation
        }
    },
    imageContainer: {
        display: 'flex',
        gap: 15,
        marginBottom: 20,
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            gap: 0,
            marginBottom: 10
        }
    },
    thumbnailContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        [theme.breakpoints.down('sm')]: {
            display: 'none' // Hidden on mobile, moved below
        }
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
    mainImageWrapper: {
        flex: 1,
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            padding: 10
        }
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '100%',
        maxWidth: 450,
        height: 450,
        objectFit: 'contain',
        [theme.breakpoints.down('sm')]: {
            height: 350,
            border: 'none'
        }
    },
    favoriteIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
        background: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: 8,
        '&:hover': { background: '#fff' }
    },
    shareIcon: {
        position: 'absolute',
        top: 65,
        right: 15,
        background: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: 8,
        '&:hover': { background: '#fff' }
    },
    ratingBadge: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        background: 'rgba(255,255,255,0.9)',
        padding: '2px 8px',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 600,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    dotContainer: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            marginBottom: 15
        }
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: '#e0e0e0'
    },
    activeDot: {
        background: '#2874f0',
        width: 20,
        borderRadius: 4
    },
    mobileThumbnails: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            gap: 10,
            padding: '0 15px',
            overflowX: 'auto',
            marginBottom: 20,
            '&::-webkit-scrollbar': { display: 'none' }
        }
    },
    mobileThumb: {
        minWidth: 70,
        height: 80,
        padding: 5,
        border: '1px solid #f0f0f0',
        borderRadius: 8,
        objectFit: 'contain'
    },
    bottomBar: {
        [theme.breakpoints.up('md')]: {
            padding: '0 80px'
        },
        [theme.breakpoints.down('sm')]: {
            position: 'fixed',
            bottom: 56, // Positioned above the 56px height BottomNav
            left: 0,
            right: 0,
            background: '#fff',
            display: 'flex',
            padding: 8,
            gap: 8,
            borderTop: '1px solid #f0f0f0',
            zIndex: 1000,
            boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
        }
    },
    desktopButtons: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    cartIconButton: {
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        padding: '10px 15px'
    },
    emiButton: {
        flex: 1,
        textTransform: 'none',
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        fontWeight: 600,
        fontSize: 13,
        padding: '8px 0',
        '& span': { display: 'block' }
    },
    buyNowMobile: {
        flex: 1,
        background: '#ffd814',
        color: '#000',
        textTransform: 'none',
        borderRadius: 8,
        fontWeight: 600,
        fontSize: 14,
        '&:hover': { background: '#f7ca00' }
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50,
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
        loadRazorpay(product.price.cost);
    }

    const addItemToCart = () => {
        dispatch(addToCart(id, 1));
        history.push('/cart');
    }

    // Generate random images for gallery
    const images = [
        product.detailUrl,
        `https://picsum.photos/seed/${id}1/400/400`,
        `https://picsum.photos/seed/${id}2/400/400`,
        `https://picsum.photos/seed/${id}3/400/400`,
        `https://picsum.photos/seed/${id}4/400/400`
    ];

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
                <Box className={classes.mainImageWrapper}>
                    <img src={selectedImage} className={classes.productImage} alt="product" />

                    <IconButton className={classes.favoriteIcon}><FavoriteBorder style={{ fontSize: 20, color: '#666' }} /></IconButton>
                    <IconButton className={classes.shareIcon}><Share style={{ fontSize: 20, color: '#666' }} /></IconButton>

                    <Box className={classes.ratingBadge}>
                        4.3 <Star style={{ fontSize: 14, color: '#388e3c', marginLeft: 2 }} />
                        <span style={{ color: '#878787', marginLeft: 8, fontWeight: 400 }}>| 1.1L+</span>
                    </Box>
                </Box>
            </Box>

            {/* Mobile Carousel Dots */}
            <Box className={classes.dotContainer}>
                {images.map((_, i) => (
                    <Box key={i} className={clsx(classes.dot, selectedImage === images[i] && classes.activeDot)} />
                ))}
            </Box>

            <Typography style={{ padding: '0 15px', fontSize: 14, fontWeight: 500, marginBottom: 10 }}>
                Selected Color: <span style={{ color: '#878787' }}>Light Gray</span>
            </Typography>

            {/* Mobile Thumbnails */}
            <Box className={classes.mobileThumbnails}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className={classes.mobileThumb}
                        onClick={() => setSelectedImage(img)}
                        style={{ borderColor: selectedImage === img ? '#2874f0' : '#f0f0f0' }}
                        alt=""
                    />
                ))}
            </Box>

            {/* Sticky Bottom Bar for Mobile & Classic Buttons for Desktop */}
            <Box className={classes.bottomBar}>
                {/* Desktop layout */}
                <Box className={classes.desktopButtons}>
                    <Button onClick={() => addItemToCart()} className={clsx(classes.button, classes.addToCart)} style={{ width: '100%' }} variant="contained"><Cart />Add to Cart</Button>
                </Box>

                {/* Mobile layout */}
                <Box display={{ xs: 'flex', md: 'none' }} style={{ width: '100%', gap: 8 }}>
                    <IconButton className={classes.cartIconButton} onClick={() => addItemToCart()}>
                        <Cart style={{ color: '#333' }} />
                    </IconButton>
                    <Button className={classes.emiButton} variant="outlined">
                        <Box>
                            <Typography style={{ fontSize: 13, fontWeight: 700 }}>View Plans</Typography>
                            <Typography style={{ fontSize: 11, color: '#666' }}>EMI from ₹1,625/m</Typography>
                        </Box>
                    </Button>
                    <Button className={classes.buyNowMobile} onClick={() => addItemToCart()} variant="contained" style={{ background: '#ff9f00' }}>
                        <Box>
                            <Typography style={{ fontSize: 14, fontWeight: 700 }}>Add to Cart</Typography>
                            <Typography style={{ fontSize: 12 }}>at ₹{product.price.cost.toLocaleString()}</Typography>
                        </Box>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ActionItem;