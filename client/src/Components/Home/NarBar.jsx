import { Box, makeStyles, Typography } from '@material-ui/core';
import { navData } from '../../constant/data';
import { Link } from 'react-router-dom';
import { ExpandMore } from '@material-ui/icons';

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        justifyContent: 'center',
        background: '#fff',
        padding: '10px 0',
        width: '100%',
        overflowX: 'hidden',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            padding: '10px 10px',
            gap: 10,
            justifyContent: 'unset'
        }
    },
    container: {
        padding: '12px 15px',
        textAlign: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&:hover $text': {
            color: '#2874f0'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '12px 0px'
        }
    },
    image: {
        width: 64,
        height: 64,
        objectFit: 'contain',
        [theme.breakpoints.down('sm')]: {
            width: 50,
            height: 50,
            background: '#ebf4ff',
            borderRadius: 8,
            padding: 5
        }
    },
    textContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 5
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit',
        color: '#212121',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '80%',
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
            fontWeight: 500
        }
    },
    badge: {
        background: '#2874f0',
        color: '#fff',
        fontSize: 8,
        padding: '1px 4px',
        borderRadius: 2,
        position: 'absolute',
        top: 0,
        fontWeight: 700
    }
}));

const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map((temp, index) => (
                    <Link
                        to={`/category/${temp.text.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        className={classes.container}
                        key={index}
                        style={{ position: 'relative' }}
                    >
                        {temp.hasBadge && <Box className={classes.badge}>NEW</Box>}
                        <img src={temp.url} className={classes.image} alt={temp.text} />
                        <Box className={classes.textContainer}>
                            <Typography className={classes.text}>
                                {window.innerWidth <= 600 ? (temp.text.length > 7 ? temp.text.slice(0, 7) + '...' : temp.text) : temp.text}
                            </Typography>
                            {temp.hasDropdown && <ExpandMore style={{ fontSize: 16, marginLeft: 2, color: '#878787' }} />}
                        </Box>
                    </Link>
                ))
            }
        </Box>
    )
}

export default NavBar;