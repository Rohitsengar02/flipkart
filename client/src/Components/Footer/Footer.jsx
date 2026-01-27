import { Box, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    footer: {
        backgroundColor: '#172337',
        color: '#fff',
        padding: '50px 0 50px 0',
        marginTop: 50,
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 110
        }
    },
    container: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 20px'
    },
    title: {
        color: '#878787',
        fontSize: 12,
        marginBottom: 10
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        display: 'block',
        marginBottom: 8,
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    },
    border: {
        borderLeft: '1px solid #454d5e',
        paddingLeft: 25,
        [theme.breakpoints.down('sm')]: {
            borderLeft: 'none',
            paddingLeft: 0,
            marginTop: 20
        }
    }
}));

const Footer = () => {
    const classes = useStyle();

    return (
        <Box className={classes.footer}>
            <Grid container className={classes.container}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Grid container>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <Typography className={classes.title}>ABOUT</Typography>
                            <Typography className={classes.text}>Contact Us</Typography>
                            <Typography className={classes.text}>About Us</Typography>
                            <Typography className={classes.text}>Careers</Typography>
                            <Typography className={classes.text}>Flipkart Stories</Typography>
                            <Typography className={classes.text}>Press</Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <Typography className={classes.title}>HELP</Typography>
                            <Typography className={classes.text}>Payments</Typography>
                            <Typography className={classes.text}>Shipping</Typography>
                            <Typography className={classes.text}>Cancellation & Returns</Typography>
                            <Typography className={classes.text}>FAQ</Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <Typography className={classes.title}>POLICY</Typography>
                            <Typography className={classes.text}>Return Policy</Typography>
                            <Typography className={classes.text}>Terms Of Use</Typography>
                            <Typography className={classes.text}>Security</Typography>
                            <Typography className={classes.text}>Privacy</Typography>
                            <Typography className={classes.text}>Sitemap</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} className={classes.border}>
                    <Grid container>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography className={classes.title}>Mail Us:</Typography>
                            <Typography style={{ fontSize: 12 }}>
                                Flipkart Internet Private Limited,<br />
                                Buildings Alyssa, Begonia &<br />
                                Clove Embassy Tech Village,<br />
                                Outer Ring Road, Devarabeesanahalli Village,<br />
                                Bengaluru, 560103,<br />
                                Karnataka, India
                            </Typography>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography className={classes.title}>Registered Office Address:</Typography>
                            <Typography style={{ fontSize: 12 }}>
                                Flipkart Internet Private Limited,<br />
                                Buildings Alyssa, Begonia &<br />
                                Clove Embassy Tech Village,<br />
                                Outer Ring Road, Devarabeesanahalli Village,<br />
                                Bengaluru, 560103,<br />
                                Karnataka, India
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
