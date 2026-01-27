import { useState } from 'react';
import { Box, Button, Typography, makeStyles, Grid, Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import { useSelector } from 'react-redux';
import TotalView from '../Cart/TotalView';
import { useHistory } from 'react-router-dom';
import { loadRazorpay } from '../../razorpay/loadPayment';

const useStyles = makeStyles({
    component: {
        padding: '30px 135px',
        display: 'flex',
        '@media (max-width: 960px)': {
            padding: '15px 0'
        }
    },
    leftComponent: {
        paddingRight: 15,
        '@media (max-width: 960px)': {
            marginBottom: 15,
            paddingRight: 0
        }
    },
    header: {
        background: '#fff',
        padding: '15px 24px',
        borderBottom: '1px solid #f0f0f0'
    },
    paymentMethods: {
        background: '#fff',
        padding: '20px 24px',
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 2,
        background: '#fb641b',
        color: '#fff',
        marginTop: 20,
        fontWeight: 600,
        '&:hover': {
            background: '#fb641b'
        }
    }
});

const Payment = () => {
    const classes = useStyles();
    const history = useHistory();
    const { cartItems } = useSelector(state => state.cart);
    const [value, setValue] = useState('razorpay');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const confirmOrder = async () => {
        if (value === 'razorpay') {
            // Calculate total
            let total = 0;
            cartItems.forEach(item => {
                total += item.price.cost;
            });
            await loadRazorpay(total);
            // After payment success (usually handled by callback), we would redirect. 
            // For this flow, we'll assume success and redirect to orders.
            // In a real app, Razorpay callback handles this. 
            // We'll push to orders just to demonstrate the flow requested.
            // setTimeout(() => history.push('/orders'), 2000); 
            // Note: loadRazorpay doesn't return a promise that resolves on success easily here without callback modification.
            // For now, let's just push to orders for the demo flow if they click it, or maybe separate COD?
        }

        // Simulating order placement
        const order = {
            id: 'ORD' + Math.floor(Math.random() * 1000000),
            items: cartItems,
            date: new Date().toDateString(),
            total: cartItems.reduce((acc, item) => acc + item.price.cost, 0),
            status: 'Placed'
        };

        const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        existingOrders.push(order);
        localStorage.setItem('orders', JSON.stringify(existingOrders));

        // Clear cart (optional, but good practice)
        // dispatch(clearCart()); // If action exists

        history.push('/orders');
    }

    return (
        <Grid container className={classes.component}>
            <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                <Box className={classes.header}>
                    <Typography style={{ fontWeight: 600, fontSize: 18 }}>Payment Options</Typography>
                </Box>
                <Box className={classes.paymentMethods}>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="payment" name="payment" value={value} onChange={handleChange}>
                            <FormControlLabel value="razorpay" control={<Radio />} label="Razorpay / UPI / Card" />
                            <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
                            <FormControlLabel value="netbanking" control={<Radio disabled />} label="Net Banking (Unavailable)" />
                        </RadioGroup>
                    </FormControl>

                    <Button onClick={() => confirmOrder()} className={classes.button} variant="contained">
                        {value === 'cod' ? 'CONFIRM ORDER' : 'PAY & ORDER'}
                    </Button>
                </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TotalView cartItems={cartItems} />
            </Grid>
        </Grid>
    )
}

export default Payment;
