import Carousel from 'react-material-ui-carousel'
import { makeStyles, Box } from '@material-ui/core'
import { bannerData } from '../../constant/data';


const useStyle = makeStyles(theme => ({
    container: {
    },
    image: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }
}))

const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel
            autoPlay={true}
            animation="slide"
            indicators={true}
            navButtonsAlwaysVisible={window.innerWidth > 600}
            cycleNavigation={true}
            className={classes.container}
            indicatorIconButtonProps={{
                style: {
                    marginTop: -30,
                    zIndex: 1,
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: '#fff'
                }
            }}
            navButtonsProps={{
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    width: 50,
                    boxShadow: '0 1px 5px rgba(0,0,0,0.1)'
                }
            }}
        >
            {
                bannerData.map((image, i) => (
                    <Box key={i} style={{ padding: window.innerWidth <= 600 ? '0 10px' : 0 }}>
                        <img
                            src={image}
                            className={classes.image}
                            style={{ borderRadius: window.innerWidth <= 600 ? 12 : 0 }}
                            alt=""
                        />
                    </Box>
                ))
            }
        </Carousel>
    )
}

export default Banner;