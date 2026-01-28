import { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction, makeStyles, Badge } from '@material-ui/core';
import { Home, ShoppingCart, AccountCircle, Notifications, Apps } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 1200,
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
        },
        borderTop: '1px solid #f0f0f0',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        height: 56,
        '& .Mui-selected': {
            color: '#2874f0 !important'
        },
        '& .MuiBottomNavigationAction-label': {
            fontSize: '10px !important'
        }
    },
    actionItem: {
        minWidth: 'auto',
        padding: '6px 0'
    }
}));

const BottomNav = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const { cartItems } = useSelector(state => state.cart);

    const [value, setValue] = useState(0);

    useEffect(() => {
        if (location.pathname === '/') setValue(0);
        else if (location.pathname === '/all-categories') setValue(1);
        else if (location.pathname === '/notifications') setValue(2);
        else if (location.pathname === '/profile') setValue(3);
        else if (location.pathname === '/cart') setValue(4);
    }, [location.pathname]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) history.push('/');
        else if (newValue === 1) history.push('/all-categories');
        else if (newValue === 2) history.push('/notifications');
        else if (newValue === 3) history.push('/profile');
        else if (newValue === 4) history.push('/cart');
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction className={classes.actionItem} label="Home" icon={<Home />} />
            <BottomNavigationAction className={classes.actionItem} label="Categories" icon={<Apps />} />
            <BottomNavigationAction className={classes.actionItem} label="Notifications" icon={<Notifications />} />
            <BottomNavigationAction className={classes.actionItem} label="Account" icon={<AccountCircle />} />
            <BottomNavigationAction
                className={classes.actionItem}
                label="Cart"
                icon={
                    <Badge badgeContent={cartItems?.length} color="secondary">
                        <ShoppingCart />
                    </Badge>
                }
            />
        </BottomNavigation>
    );
};

export default BottomNav;
