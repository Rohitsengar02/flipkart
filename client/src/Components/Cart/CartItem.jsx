import { Card, makeStyles, Box, Typography, Button } from '@material-ui/core';
import clsx from 'clsx';
import GroupButton from './GroupButton';

const useStyle = makeStyles(theme => ({
    component: {
        borderTop: '1px solid #f0f0f0',
        borderRadius: 0,
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            position: 'relative',
            padding: 10
        }
    },
    leftComponent: {
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            flexDirection: 'row',
            alignItems: 'center'
        }
    },
    image: {
        height: 110,
        width: 110,
        [theme.breakpoints.down('sm')]: {
            height: 80,
            width: 80
        }
    },
    mid: {
        margin: 20,
        [theme.breakpoints.down('sm')]: {
            margin: '0 0 0 10px',
            flex: 1
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    smallText: {
        fontSize: 14,
    },
    price: {
        fontSize: 18,
        fontWeight: 600
    },
    remove: {
        marginTop: 20,
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            marginTop: 5,
            fontSize: 14,
            width: '100%',
            justifyContent: 'flex-start'
        }
    }
}));

const CartItem = ({ item, removeItemFromCart }) => {
    console.log(item)
    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src={item.url} className={classes.image} alt="" />
                <GroupButton />
            </Box>
            <Box className={classes.mid}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 10 }}>Seller:RetailNet
                    <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} alt="" /></span>
                </Typography>
                <Typography style={{ margin: '20px 0' }}>
                    <span className={classes.price}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{item.price.discount} off</span>
                </Typography>
                <Button className={classes.remove} onClick={() => removeItemFromCart(item.id)}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;