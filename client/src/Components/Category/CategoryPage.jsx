import { useEffect, useState } from 'react';
import { Box, Typography, Grid, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';

const useStyles = makeStyles(theme => ({
    component: {
        width: '100%',
        marginTop: 10,
        background: '#F2F2F2'
    },
    container: {
        maxWidth: 1280,
        margin: '0 auto',
        padding: '10px 20px',
        display: 'flex',
        gap: 10
    },
    leftPane: {
        width: 250,
        background: '#FFFFFF',
        padding: 15,
        borderRadius: 2,
        height: 'fit-content',
        position: 'sticky',
        top: 70
    },
    rightPane: {
        flex: 1
    },
    header: {
        background: '#FFFFFF',
        padding: '15px 20px',
        marginBottom: 10,
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productGrid: {
        background: '#FFFFFF',
        padding: 10,
        borderRadius: 2
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        color: '#212121'
    },
    resultText: {
        fontSize: 14,
        color: '#878787'
    }
}));

const CategoryPage = () => {
    const classes = useStyles();
    const { category } = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.getProducts);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        if (products && products.length > 0) {
            if (category === 'all') {
                setFilteredProducts(products);
            } else {
                // Split URL slug into potential keywords (e.g. 'top-offers' -> ['top', 'offers'])
                const searchKeywords = category.toLowerCase().split('-');

                const filtered = products.filter(product => {
                    const prodCategory = product.category ? product.category.toLowerCase() : '';
                    const shortTitle = product.title.shortTitle.toLowerCase();
                    const tagline = product.tagline ? product.tagline.toLowerCase() : '';

                    // Check if ANY keyword matches the category, title, or tagline
                    return searchKeywords.some(keyword =>
                        keyword.length > 2 && ( // Ignore very short words to avoid false positives
                            prodCategory.includes(keyword) ||
                            shortTitle.includes(keyword) ||
                            tagline.includes(keyword)
                        )
                    );
                });
                setFilteredProducts(filtered);
            }
        }
    }, [products, category]);

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <Box className={classes.leftPane}>
                    <FilterSidebar />
                </Box>
                <Box className={classes.rightPane}>
                    <Box className={classes.header}>
                        <Box>
                            <Typography className={classes.title}>
                                {category === 'all' ? 'All Products' : category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </Typography>
                            <Typography className={classes.resultText}>
                                Showing {filteredProducts.length} results
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.productGrid}>
                        <Grid container spacing={2}>
                            {filteredProducts && filteredProducts.map(product => (
                                <Grid item xs={12} sm={6} md={3} key={product.id}>
                                    <ProductCard product={product} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CategoryPage;
