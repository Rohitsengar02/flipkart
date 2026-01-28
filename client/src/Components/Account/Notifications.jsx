import { Box, Typography, makeStyles, IconButton } from '@material-ui/core';
import { Notifications as NotificationsIcon, ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#fff',
        minHeight: '100vh',
        [theme.breakpoints.up('md')]: {
            background: '#f1f3f6',
            marginTop: 55,
            padding: '20px 0'
        }
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        background: '#fff',
        borderBottom: '1px solid #f0f0f0',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    emptyContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '100px 20px',
        textAlign: 'center'
    },
    icon: {
        fontSize: 100,
        color: '#e0e0e0',
        marginBottom: 20
    }
}));

const Notifications = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Box className={classes.component}>
            <Box className={classes.header}>
                <IconButton onClick={() => history.goBack()} style={{ padding: 8 }}>
                    <ArrowBack />
                </IconButton>
                <Typography style={{ fontSize: 18, fontWeight: 600, marginLeft: 10 }}>Notifications</Typography>
            </Box>

            <Box className={classes.emptyContainer}>
                <NotificationsIcon className={classes.icon} />
                <Typography style={{ fontSize: 18, fontWeight: 600 }}>No Notifications Yet</Typography>
                <Typography style={{ fontSize: 14, color: '#878787', marginTop: 10 }}>
                    We'll notify you when something important happens.
                </Typography>
            </Box>
        </Box>
    );
}

export default Notifications;
