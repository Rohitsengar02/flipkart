import { useState } from 'react';
import { Box, Button, TextField, Typography, makeStyles, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import TotalView from '../Cart/TotalView';
import { useHistory } from 'react-router-dom';

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
    form: {
        background: '#fff',
        padding: '20px 24px',
        '& > *': {
            marginBottom: 20,
            width: '100%'
        }
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 2,
        background: '#fb641b',
        color: '#fff',
        fontWeight: 600,
        '&:hover': {
            background: '#fb641b'
        }
    }
});

const Shipping = () => {
    const classes = useStyles();
    const history = useHistory();
    const { cartItems } = useSelector(state => state.cart);

    const [address, setAddress] = useState({
        name: '',
        phone: '',
        pincode: '',
        locality: '',
        address: '',
        city: '',
        state: '',
        landmark: ''
    });

    const onValueChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    }

    const deliver = () => {
        if (!address.name || !address.address || !address.phone) {
            alert('Please fill in mandatory fields');
            return;
        }
        localStorage.setItem('deliveryAddress', JSON.stringify(address));
        history.push('/payment');
    }

    return (
        <Grid container className={classes.component}>
            <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                <Box className={classes.header}>
                    <Typography style={{ fontWeight: 600, fontSize: 18 }}>Delivery Address</Typography>
                </Box>
                <Box className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(e) => onValueChange(e)} name='name' label='Name' variant='outlined' fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(e) => onValueChange(e)} name='phone' label='10-digit mobile number' variant='outlined' fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(e) => onValueChange(e)} name='pincode' label='Pincode' variant='outlined' fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(e) => onValueChange(e)} name='locality' label='Locality' variant='outlined' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={(e) => onValueChange(e)} name='address' label='Address (Area and Street)' variant='outlined' fullWidth multiline rows={3} required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(e) => onValueChange(e)} name='city' label='City/District/Town' variant='outlined' fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(e) => onValueChange(e)} name='state' label='State' variant='outlined' fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(e) => onValueChange(e)} name='landmark' label='Landmark (Optional)' variant='outlined' fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(e) => onValueChange(e)} name='alternatePhone' label='Alternate Phone (Optional)' variant='outlined' fullWidth />
                        </Grid>
                    </Grid>
                    <Button onClick={() => deliver()} className={classes.button} variant="contained">DELIVER HERE</Button>
                </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TotalView cartItems={cartItems} />
            </Grid>
        </Grid>
    )
}

export default Shipping;
