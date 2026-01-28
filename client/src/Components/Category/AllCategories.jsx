import { Box, Typography, makeStyles, IconButton, Grid } from '@material-ui/core';
import { Search, Mic, ArrowBack } from '@material-ui/icons';
import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#fff',
        minHeight: '100vh',
        paddingBottom: 60
    },
    header: {
        background: '#2874f0',
        color: '#fff',
        padding: '10px 15px',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100
    },
    gridContainer: {
        padding: '20px 10px'
    },
    catBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
        marginBottom: 20
    },
    imageWrapper: {
        width: 70,
        height: 70,
        borderRadius: '50%',
        background: '#ebf4ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        overflow: 'hidden'
    },
    catImage: {
        width: '60%',
        height: '60%',
        objectFit: 'contain'
    },
    catText: {
        fontSize: 12,
        fontWeight: 500,
        textAlign: 'center',
        color: '#444',
        width: '90%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 700,
        padding: '10px 15px',
        borderTop: '1px solid #f0f0f0',
        color: '#212121'
    }
}));

const categories = [
    { name: 'Offer Zone', img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' },
    { name: 'Grocery', img: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Mobiles', img: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' },
    { name: 'Fashion', img: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100' },
    { name: 'Electronics', img: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' },
    { name: 'Home', img: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100' },
    { name: 'Personal Care', img: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' },
    { name: 'Appliances', img: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' },
    { name: 'Toys & Baby', img: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' },
    { name: 'Furniture', img: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100' },
    { name: 'Flights & Hotels', img: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' },
    { name: 'Insurance', img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' },
    { name: 'Sports', img: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100' },
    { name: 'Nutrition & more', img: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Bikes & Cars', img: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' },
    { name: 'Gift Cards', img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' },
    { name: 'Medicines', img: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Repair & more', img: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100' },
    { name: 'Sell-Back', img: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' },
    { name: 'Gaming', img: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' },
    { name: 'Books', img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' },
    { name: 'Stationery', img: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100' },
    { name: 'Gardening', img: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100' },
    { name: 'Pet Supplies', img: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' },
    { name: 'Music', img: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' }
];

const moreOnFlipkart = [
    { name: 'SuperCoin', img: 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png', color: '#fff5e6' },
    { name: 'Coupons', img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100', color: '#ffebee' },
    { name: 'Deal TV', img: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', color: '#e1f5fe' },
    { name: 'Credit', img: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', color: '#e8f5e9' }
];

const AllCategories = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Box className={classes.component}>
            <Box className={classes.header}>
                <IconButton onClick={() => history.goBack()} style={{ color: '#fff', padding: 8 }}>
                    <ArrowBack />
                </IconButton>
                <Typography style={{ fontSize: 18, fontWeight: 500, flex: 1, marginLeft: 10 }}>All Categories</Typography>
                <IconButton style={{ color: '#fff', padding: 8 }}><Search /></IconButton>
                <IconButton style={{ color: '#fff', padding: 8 }}><Mic /></IconButton>
            </Box>

            <Grid container className={classes.gridContainer}>
                {categories.map((cat, index) => (
                    <Grid item xs={3} key={index}>
                        <Link
                            to={`/category/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                            className={classes.catBox}
                        >
                            <Box className={classes.imageWrapper}>
                                <img src={cat.img} alt={cat.name} className={classes.catImage} />
                            </Box>
                            <Typography className={classes.catText}>{cat.name}</Typography>
                        </Link>
                    </Grid>
                ))}
            </Grid>

            <Typography className={classes.sectionTitle}>More on Flipkart</Typography>
            <Grid container className={classes.gridContainer}>
                {moreOnFlipkart.map((cat, index) => (
                    <Grid item xs={3} key={index}>
                        <Box className={classes.catBox}>
                            <Box className={classes.imageWrapper} style={{ background: cat.color }}>
                                <img src={cat.img} alt={cat.name} className={classes.catImage} />
                            </Box>
                            <Typography className={classes.catText}>{cat.name}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AllCategories;
