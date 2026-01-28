import { useContext } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { LoginContext } from '../../context/ContextProvider';
import {
    LocalMall as OrdersIcon,
    Favorite as WishlistIcon,
    ConfirmationNumber as CouponsIcon,
    HeadsetMic as HelpIcon,
    ChevronRight,
    AccountBalanceWallet,
    AccountBalance,
    CreditCard,
    FlashOn,
    AccountCircle,
    Notifications,
    Security
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#f1f3f6',
        minHeight: '100vh',
        paddingBottom: 60,
        [theme.breakpoints.up('md')]: {
            marginTop: 55,
            padding: '20px 0'
        }
    },
    profileHeader: {
        background: 'linear-gradient(180deg, #fce4ec 0%, #fff 100%)',
        padding: '20px 15px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },
    coinBox: {
        position: 'absolute',
        top: 20,
        right: 15,
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        padding: '2px 8px',
        borderRadius: 12,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        gap: 5,
        border: '1px solid #ffe0b2'
    },
    plusBadge: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        color: '#717478',
        fontSize: 14,
        fontWeight: 500
    },
    blackBanner: {
        background: '#1c1c1c',
        color: '#fff',
        margin: '0 15px 15px',
        padding: '12px 15px',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer'
    },
    actionGrid: {
        padding: '0 15px',
        marginBottom: 20
    },
    actionCard: {
        background: '#fff',
        border: '1px solid #f0f0f0',
        borderRadius: 4,
        padding: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        '&:hover': { background: '#fafafa' }
    },
    verifyEmail: {
        background: '#fff',
        margin: '15px 0',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        borderTop: '1px solid #f0f0f0',
        borderBottom: '1px solid #f0f0f0'
    },
    section: {
        background: '#fff',
        marginTop: 15,
        padding: '0 15px'
    },
    sectionTitle: {
        padding: '15px 0 10px',
        fontSize: 16,
        fontWeight: 700,
        color: '#212121'
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px 0',
        borderBottom: '1px solid #f0f0f0',
        cursor: 'pointer',
        '&:last-child': { borderBottom: 'none' }
    },
    listIcon: {
        color: '#2874f0',
        marginRight: 15
    },
    listContent: {
        flex: 1
    },
    recentlyViewed: {
        display: 'flex',
        gap: 10,
        overflowX: 'auto',
        padding: '10px 0',
        '&::-webkit-scrollbar': { display: 'none' }
    },
    viewedItem: {
        minWidth: 100,
        height: 120,
        padding: 5,
        border: '1px solid #f0f0f0',
        borderRadius: 8,
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& img': { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }
    }
}));

const Profile = () => {
    const classes = useStyles();
    const history = useHistory();
    const { setAccount } = useContext(LoginContext);


    return (
        <Box className={classes.component}>
            {/* Header Section */}
            <Box className={classes.profileHeader}>
                <Typography style={{ fontSize: 20, fontWeight: 700 }}>Flipkart Customer</Typography>
                <Box className={classes.plusBadge}>
                    <FlashOn style={{ fontSize: 16, color: '#bcc0c4' }} /> Plus Silver
                </Box>
                <Typography style={{ fontSize: 12, color: '#878787' }}>valid till August 22, 2026</Typography>

                <Box className={classes.coinBox}>
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" style={{ width: 14 }} alt="" />
                    <Typography style={{ fontSize: 14, fontWeight: 700 }}>0</Typography>
                </Box>
            </Box>

            {/* Black Banner */}
            <Box className={classes.blackBanner}>
                <Typography style={{ fontSize: 13, fontWeight: 600 }}>Upgrade to <span style={{ color: '#fff', fontWeight: 800 }}>Flipkart BLACK</span></Typography>
                <ChevronRight />
            </Box>

            {/* Quick Actions Grid */}
            <Grid container spacing={1} className={classes.actionGrid}>
                <Grid item xs={6}>
                    <Box className={classes.actionCard} onClick={() => history.push('/orders')}>
                        <OrdersIcon style={{ color: '#2874f0' }} />
                        <Typography style={{ fontSize: 14, fontWeight: 500 }}>Orders</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.actionCard} onClick={() => history.push('/wishlist')}>
                        <WishlistIcon style={{ color: '#2874f0' }} />
                        <Typography style={{ fontSize: 14, fontWeight: 500 }}>Wishlist</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.actionCard}>
                        <CouponsIcon style={{ color: '#2874f0' }} />
                        <Typography style={{ fontSize: 14, fontWeight: 500 }}>Coupons</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.actionCard}>
                        <HelpIcon style={{ color: '#2874f0' }} />
                        <Typography style={{ fontSize: 14, fontWeight: 500 }}>Help Center</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Email Verification */}
            <Box className={classes.verifyEmail}>
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/email-verification_900eb4.png" style={{ width: 40 }} alt="" />
                <Box style={{ flex: 1 }}>
                    <Typography style={{ fontSize: 14, fontWeight: 700 }}>Add/Verify your Email</Typography>
                    <Typography style={{ fontSize: 12, color: '#878787' }}>Get latest updates of your orders</Typography>
                </Box>
                <Button variant="contained" style={{ background: '#2874f0', color: '#fff', textTransform: 'none', height: 32 }}>Update</Button>
            </Box>

            {/* Finance Options */}
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle}>Finance Options</Typography>

                <Box className={classes.listItem}>
                    <AccountBalanceWallet className={classes.listIcon} />
                    <Box className={classes.listContent}>
                        <Typography style={{ fontSize: 14, fontWeight: 600 }}>Flipkart Personal Loan</Typography>
                        <Typography style={{ fontSize: 12, color: '#878787' }}>Loan Mela is Live: FREE ₹250 Voucher</Typography>
                    </Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>

                <Box className={classes.listItem}>
                    <CreditCard className={classes.listIcon} />
                    <Box className={classes.listContent}>
                        <Typography style={{ fontSize: 14, fontWeight: 600 }}>EMI for Everyone</Typography>
                        <Typography style={{ fontSize: 12, color: '#878787' }}>No Cost EMI | Instant Approval</Typography>
                    </Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>

                <Box className={classes.listItem}>
                    <AccountBalance className={classes.listIcon} />
                    <Box className={classes.listContent}>
                        <Typography style={{ fontSize: 14, fontWeight: 600 }}>5% Cashback with Flipkart Credit Card</Typography>
                        <Typography style={{ fontSize: 12, color: '#878787' }}>Limited Time offer - ₹3,250 Gift Vouchers + ₹250 BookMyShow Voucher</Typography>
                    </Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
            </Box>

            {/* Account Settings */}
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle}>Account Settings</Typography>
                <Box className={classes.listItem}>
                    <FlashOn className={classes.listIcon} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Flipkart Plus</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
                <Box className={classes.listItem}>
                    <AccountCircle className={classes.listIcon} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Edit Profile</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
                <Box className={classes.listItem}>
                    <CreditCard className={classes.listIcon} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Saved Credit / Debit & Gift Cards</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
                <Box className={classes.listItem}>
                    <OrdersIcon className={classes.listIcon} style={{ transform: 'scale(0.8)' }} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Saved Addresses</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
                <Box className={classes.listItem}>
                    <FlashOn className={classes.listIcon} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Select Language</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
                <Box className={classes.listItem}>
                    <Notifications style={{ color: '#2874f0', marginRight: 15 }} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Notification Settings</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
                <Box className={classes.listItem}>
                    <Security style={{ color: '#2874f0', marginRight: 15 }} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Privacy Center</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
            </Box>

            {/* My Activity */}
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle}>My Activity</Typography>
                <Box className={classes.listItem}>
                    <FlashOn className={classes.listIcon} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Reviews</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
                <Box className={classes.listItem}>
                    <FlashOn className={classes.listIcon} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Questions & Answers</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
            </Box>

            {/* Earn with Flipkart */}
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle}>Earn with Flipkart</Typography>
                <Box className={classes.listItem}>
                    <OrdersIcon className={classes.listIcon} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Sell on Flipkart</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
            </Box>

            {/* Feedback & Information */}
            <Box className={classes.section}>
                <Typography className={classes.sectionTitle}>Feedback & Information</Typography>
                <Box className={classes.listItem}>
                    <FlashOn className={classes.listIcon} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Terms, Policies and Licenses</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
                <Box className={classes.listItem}>
                    <HelpIcon className={classes.listIcon} />
                    <Box className={classes.listContent}><Typography style={{ fontSize: 14 }}>Browse FAQs</Typography></Box>
                    <ChevronRight style={{ color: '#878787' }} />
                </Box>
            </Box>

            {/* Logout Button */}
            <Box style={{ padding: '20px 15px' }}>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => { setAccount(''); history.push('/'); }}
                    style={{ background: '#fff', color: '#2874f0', textTransform: 'none', fontWeight: 600, border: '1px solid #e0e0e0', padding: '10px 0' }}
                >
                    Log Out
                </Button>
            </Box>
        </Box>
    );
}

export default Profile;
