import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    component: {
        padding: '30px 135px',
        '@media (max-width: 960px)': {
            padding: '15px 10px'
        }
    },
    container: {
        padding: '20px',
        background: '#fff',
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 20
    }
});

const Orders = () => {
    const classes = useStyles();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        setOrders(storedOrders.reverse()); // Newest first
    }, []);

    return (
        <Box className={classes.component}>
            <Typography className={classes.title}>My Orders</Typography>
            {orders.length === 0 ? (
                <Box>No orders found.</Box>
            ) : (
                orders.map((order, index) => (
                    <Box key={index} className={classes.container}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <Typography><b>Order ID:</b> {order.id}</Typography>
                                <Typography><b>Date:</b> {order.date}</Typography>
                                <Typography><b>Total:</b> ₹{order.total}</Typography>
                                <Typography style={{ color: 'green', fontWeight: 600 }}>Status: {order.status}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography><b>Items:</b></Typography>
                                {order.items.map((item, i) => (
                                    <Box key={i} style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                                        <img src={item.url} style={{ width: 50, height: 50, objectFit: 'contain', marginRight: 10 }} alt="" />
                                        <Typography variant="body2">{item.title.shortTitle} (₹{item.price.cost})</Typography>
                                    </Box>
                                ))}
                            </Grid>
                        </Grid>
                    </Box>
                ))
            )}
        </Box>
    )
}

export default Orders;
