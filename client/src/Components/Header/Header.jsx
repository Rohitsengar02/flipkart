import { AppBar, makeStyles, Box, Typography, IconButton, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Menu, AccountCircle, ShoppingCart, LocationOn, ChevronRight, GetApp, ExpandMore, MoreVert } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Search from './Search';

const useStyle = makeStyles(theme => ({
    header: {
        background: '#fff',
        color: '#000',
        height: 'auto',
        transition: 'all 0.3s ease',
        boxShadow: 'none',
        borderBottom: '1px solid #f0f0f0',
        [theme.breakpoints.down('sm')]: {
            position: 'static'
        }
    },
    desktopRow: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 130px',
        justifyContent: 'space-between',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    mobileContent: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }
    },
    topRow: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 15px',
        justifyContent: 'space-between',
        width: '100%'
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
        marginLeft: 10
    },
    logo: {
        width: 170,
    },
    locationRow: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 15px',
        background: '#fff',
        width: '100%'
    },
    locationText: {
        fontSize: 12,
        fontWeight: 500,
        marginLeft: 5,
        display: 'flex',
        alignItems: 'center',
        color: '#212121'
    },
    selectLocation: {
        color: '#2874f0',
        marginLeft: 5,
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center'
    },
    coinBox: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        padding: '2px 8px',
        borderRadius: 20,
        border: '1px solid #f0f0f0'
    },
    searchRow: {
        padding: '5px 15px 10px',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            padding: 0,
            width: '100%',
            maxWidth: 600,
            margin: '0 20px'
        }
    },
    navIconBtn: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#212121',
        fontSize: 16,
        fontWeight: 500,
        margin: '0 15px',
        '&:hover': {
            background: '#f0f0f0',
            borderRadius: 8
        },
        padding: '8px 12px'
    }
}));

const Header = () => {
    const classes = useStyle();
    const { cartItems } = useSelector(state => state.cart);



    return (
        <AppBar className={classes.header}>
            {/* Desktop View */}
            <Box className={classes.desktopRow}>
                <Link to='/' className={classes.logoContainer} style={{ marginLeft: 0 }}>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" className={classes.logo} alt="Flipkart" />
                </Link>

                <Box className={classes.searchRow}>
                    <Search />
                </Box>

                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/profile" className={classes.navIconBtn}>
                        <AccountCircle style={{ fontSize: 22, marginRight: 8 }} />
                        Flipkart
                        <ExpandMore style={{ fontSize: 16, marginLeft: 4, color: '#878787' }} />
                    </Link>

                    <Link to="/cart" className={classes.navIconBtn}>
                        <Badge badgeContent={cartItems?.length} color="secondary">
                            <ShoppingCart style={{ fontSize: 22, marginRight: 8 }} />
                        </Badge>
                        Cart
                    </Link>

                    <Link to="/all-categories" className={classes.navIconBtn}>
                        <GetApp style={{ fontSize: 22, marginRight: 8 }} />
                        Become a Seller
                    </Link>

                    <IconButton color="inherit" style={{ padding: 8 }}>
                        <MoreVert />
                    </IconButton>
                </Box>
            </Box>

            {/* Mobile View */}
            <Box className={classes.mobileContent}>
                <Box className={classes.topRow}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color="inherit" style={{ padding: 5 }}>
                            <Menu />
                        </IconButton>
                        <Link to='/' className={classes.logoContainer}>
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" className={classes.logo} alt="Flipkart" />
                        </Link>
                    </Box>

                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color="inherit" style={{ padding: 8 }}>
                            <GetApp style={{ fontSize: 20 }} />
                        </IconButton>
                        <IconButton color="inherit" style={{ padding: 8 }} component={Link} to="/profile">
                            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <AccountCircle style={{ fontSize: 20 }} />
                                <Typography style={{ fontSize: 10, fontWeight: 600 }}>You</Typography>
                            </Box>
                        </IconButton>
                        <IconButton color="inherit" style={{ padding: 8 }} component={Link} to="/cart">
                            <Badge badgeContent={cartItems?.length} color="secondary">
                                <ShoppingCart style={{ fontSize: 20 }} />
                            </Badge>
                        </IconButton>
                    </Box>
                </Box>

                <Box className={classes.locationRow}>
                    <LocationOn style={{ fontSize: 16, color: '#212121' }} />
                    <Typography className={classes.locationText}>
                        Location not set <Box component="span" className={classes.selectLocation}>Select delivery location <ChevronRight style={{ fontSize: 16 }} /></Box>
                    </Typography>
                    <Box className={classes.coinBox}>
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" style={{ width: 14, height: 14, marginRight: 4 }} alt="" />
                        <Typography style={{ fontSize: 12, fontWeight: 700 }}>0</Typography>
                    </Box>
                </Box>

                <Box className={classes.searchRow}>
                    <Search />
                </Box>
            </Box>
        </AppBar>
    )
}

export default Header;