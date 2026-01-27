import { Box, makeStyles, Typography } from '@material-ui/core';
import { navData } from '../../constant/data';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '55px 130px 0 130px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover $text': {
            color: '#2874f0'
        }
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit',
        color: '#212121',
        marginTop: 5
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
                    >
                        <img src={temp.url} className={classes.image} alt={temp.text} />
                        <Typography className={classes.text}>{temp.text}</Typography>
                    </Link>
                ))
            }
        </Box>
    )
}

export default NavBar;