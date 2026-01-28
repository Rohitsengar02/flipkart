import { useState } from 'react';
import { Box, Typography, makeStyles, Table, TableBody, TableRow, TableCell, LinearProgress } from '@material-ui/core';
import { LocalOffer as Badge, Star } from '@material-ui/icons';

const useStyle = makeStyles({
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *': {
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    badge: {
        marginRight: 10,
        color: '#00CC00',
        fontSize: 15
    },
    wrapper: {
        display: 'flex'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 600,
        marginTop: 30,
        marginBottom: 20
    },
    ratingBox: {
        background: '#388e3c',
        color: '#fff',
        padding: '2px 8px',
        borderRadius: 4,
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content'
    },
    reviewContainer: {
        padding: '20px 0',
        borderBottom: '1px solid #e0e0e0'
    },
    selectorBox: {
        border: '1px solid #e0e0e0',
        padding: '8px 12px',
        marginRight: 10,
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 500,
        '&:hover': {
            borderColor: '#2874f0',
            color: '#2874f0'
        }
    },
    colorCircle: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        marginRight: 10,
        cursor: 'pointer',
        border: '1px solid #f0f0f0'
    }
});

const ProductDetail = ({ product }) => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    // Derived dummy content
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const colors = ['#000000', '#1C3F6E', '#5D4037', '#424242'];

    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <>
            <Typography style={{ marginTop: 20, fontWeight: 600 }}>Available offers</Typography>
            <Box className={classes.smallText}>
                <Typography><Badge className={classes.badge} />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><Badge className={classes.badge} />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><Badge className={classes.badge} />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <Typography><Badge className={classes.badge} />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
            </Box>

            {/* Size Selector */}
            <Box style={{ marginTop: 24 }}>
                <Typography style={{ fontSize: 14, fontWeight: 600, color: '#878787', marginBottom: 10 }}>Size</Typography>
                <Box style={{ display: 'flex' }}>
                    {sizes.map(size => (
                        <Box
                            key={size}
                            className={classes.selectorBox}
                            onClick={() => setSelectedSize(size)}
                            style={{
                                borderColor: selectedSize === size ? '#2874f0' : '#e0e0e0',
                                color: selectedSize === size ? '#2874f0' : 'inherit'
                            }}
                        >
                            {size}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Color Selector */}
            <Box style={{ marginTop: 24 }}>
                <Typography style={{ fontSize: 14, fontWeight: 600, color: '#878787', marginBottom: 10 }}>Color</Typography>
                <Box style={{ display: 'flex' }}>
                    {colors.map((color, index) => (
                        <Box
                            key={index}
                            className={classes.colorCircle}
                            onClick={() => setSelectedColor(color)}
                            style={{
                                background: color,
                                borderColor: selectedColor === color ? '#2874f0' : '#f0f0f0',
                                borderWidth: selectedColor === color ? 2 : 1
                            }}
                        ></Box>
                    ))}
                </Box>
            </Box>

            <Box style={{ overflowX: 'auto' }}>
                <Table style={{ marginTop: 20, minWidth: 300 }}>
                    <TableBody>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor} style={{ borderBottom: 'none' }}>Delivery</TableCell>
                            <TableCell style={{ fontWeight: 600, borderBottom: 'none' }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor} style={{ borderBottom: 'none' }}>Warranty</TableCell>
                            <TableCell style={{ borderBottom: 'none' }}>No Warranty</TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor} style={{ borderBottom: 'none' }}>Seller</TableCell>
                            <TableCell className={classes.smallText} style={{ borderBottom: 'none' }}>
                                <span style={{ color: '#2874f0' }}>SuperComNet</span>
                                <Typography style={{ fontSize: 13 }}>GST invoice available</Typography>
                                <Typography style={{ fontSize: 13 }}>View more sellers starting from ₹329</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2} style={{ borderBottom: 'none', padding: '20px 0' }}>
                                <img src={adURL} style={{ width: '100%', maxWidth: 390 }} alt="" />
                            </TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor}>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>

            {/* Ratings & Reviews */}
            <Box style={{ marginTop: 40, borderTop: '1px solid #f0f0f0', paddingTop: 24 }}>
                <Typography style={{ fontSize: 24, fontWeight: 600 }}>Ratings & Reviews</Typography>

                <Box style={{
                    display: 'flex',
                    flexDirection: window.innerWidth < 600 ? 'column' : 'row',
                    alignItems: window.innerWidth < 600 ? 'flex-start' : 'center',
                    marginTop: 10,
                    gap: 15
                }}>
                    <Box style={{ textAlign: window.innerWidth < 600 ? 'left' : 'center' }}>
                        <Typography style={{ fontSize: 32, fontWeight: 500 }}>4.5 <Star style={{ fontSize: 24, verticalAlign: 'text-top' }} /></Typography>
                        <Typography style={{ color: '#878787', fontSize: 14 }}>124 Ratings & 15 Reviews</Typography>
                    </Box>
                    <Box style={{ flex: 1, width: '100%', maxWidth: 300 }}>
                        {[5, 4, 3, 2, 1].map(star => (
                            <Box key={star} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12 }}>
                                <Typography>{star} ★</Typography>
                                <LinearProgress variant="determinate" value={star * 18} style={{ flex: 1, height: 6, borderRadius: 4 }} />
                                <Typography style={{ color: '#878787' }}>{star * 20}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Dummy Reviews */}
                {[
                    { user: 'Rakesh Kumar', rating: 5, date: 'Oct 2023', comment: 'Excellent product! The quality is amazing and it was delivered on time. Highly recommended.', verified: true },
                    { user: 'Sneha Gupta', rating: 4, date: 'Nov 2023', comment: 'Good value for money. Looks exactly like the picture. Satisfied with the purchase.', verified: true },
                    { user: 'Amit Patel', rating: 5, date: 'Dec 2023', comment: 'Just wow! Very happy with the product. Will buy again.', images: [product.detailUrl], verified: true },
                    { user: 'John Doe', rating: 3, date: 'Jan 2024', comment: 'Average product. Could be improved.', verified: false }
                ].map((review, index) => (
                    <Box key={index} className={classes.reviewContainer}>
                        <Box style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 5 }}>
                            <Box className={classes.ratingBox}>{review.rating} <Star style={{ fontSize: 12 }} /></Box>
                            <Typography style={{ fontWeight: 600 }}>{review.comment.split(' ')[0]}...</Typography>
                        </Box>
                        <Typography style={{ fontSize: 14, marginBottom: 8 }}>{review.comment}</Typography>
                        {review.images && (
                            <Box style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                                {review.images.map((img, i) => (
                                    <img key={i} src={img} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4 }} alt="" />
                                ))}
                            </Box>
                        )}
                        <Typography style={{ fontSize: 12, color: '#878787' }}>
                            {review.user} <span style={{ margin: '0 5px' }}>|</span> {review.date}
                            {review.verified && <span style={{ marginLeft: 10, color: '#2874f0' }}>Verified Purchase</span>}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default ProductDetail;