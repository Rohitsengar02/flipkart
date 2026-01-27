import { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import { Home, ShoppingCart, LocalMall, AccountCircle } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 1200, // Higher than footer/content
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
        },
        borderTop: '1px solid #f0f0f0',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        height: 56
    }
}));

const BottomNav = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const [value, setValue] = useState(0);

    useEffect(() => {
        if (location.pathname === '/') setValue(0);
        else if (location.pathname === '/cart') setValue(1);
        else if (location.pathname === '/orders') setValue(2);
        else setValue(3); // Account or other
    }, [location.pathname]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) history.push('/');
        else if (newValue === 1) history.push('/cart');
        else if (newValue === 2) history.push('/orders');
        else if (newValue === 3) {
            // No account page yet, maybe redirect to logic or just stay
            // For now, let's keep it as a placeholder or remove
            // history.push('/account');
        }
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<Home />} />
            <BottomNavigationAction label="Cart" icon={<ShoppingCart />} />
            <BottomNavigationAction label="Orders" icon={<LocalMall />} />
            <BottomNavigationAction label="Account" icon={<AccountCircle />} />
        </BottomNavigation>
    );
};

export default BottomNav;
