import { Box, makeStyles } from '@material-ui/core';
import NavBar from './Home/NarBar';
import Banner from './Home/Banner';
import MidSlide from './Home/MidSlide';
import MidSection from './Home/MidSection';
import Slide from './Home/Slide';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../redux/actions/productActions';
import { getShuffleProducts } from '../utils/shuffle';
import { getRecentIds } from '../utils/recent';


const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2',
        overflowX: 'hidden'
    }
})

const Home = () => {
    const classes = useStyle();

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={getShuffleProducts(products, 7)}
                    title='Discounts for You'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={getShuffleProducts(products, 7)}
                    title='Suggested Items'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={getShuffleProducts(products, 7)}
                    title='Top Selection'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={getShuffleProducts(products, 7)}
                    title='Recommended Items'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={products.filter(p => getRecentIds().includes(p.id))}
                    title='Recently Viewed'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={getShuffleProducts(products, 7)}
                    title='Top Best Sellers'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={getShuffleProducts(products, 7)}
                    title='More Products'
                    timer={false}
                    multi={true}
                />
            </Box>
        </>
    )
}

export default Home;