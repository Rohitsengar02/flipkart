import { useEffect, useState } from 'react';
import { Box, Typography, makeStyles, IconButton, Badge, Drawer } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowBack, Search, FavoriteBorder, ShoppingCart, AccountCircle, Sort, FilterList, Close } from '@material-ui/icons';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';

const useStyles = makeStyles(theme => ({
    component: {
        width: '100%',
        background: '#fff',
        minHeight: '100vh',
        [theme.breakpoints.up('md')]: {
            marginTop: 55,
            background: '#f2f2f2'
        }
    },
    header: {
        background: '#fff',
        height: 55,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        borderBottom: '1px solid #f0f0f0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    sortFilterBar: {
        display: 'flex',
        borderBottom: '1px solid #f0f0f0',
        marginTop: 55,
        background: '#fff',
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
            display: 'none'
        }
    },
    sfButton: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 0',
        fontSize: 14,
        fontWeight: 500,
        gap: 5,
        cursor: 'pointer',
        '&:first-child': { borderRight: '1px solid #f0f0f0' }
    },
    chipContainer: {
        display: 'flex',
        padding: '10px 5px',
        overflowX: 'auto',
        background: '#fff',
        gap: 10,
        '&::-webkit-scrollbar': { display: 'none' },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    chip: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 12px',
        border: '1px solid #e0e0e0',
        borderRadius: 4,
        whiteSpace: 'nowrap',
        fontSize: 12,
        fontWeight: 500,
        gap: 8
    },
    adSection: {
        padding: 10,
        background: '#f1f3f6',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    adCardContainer: {
        display: 'flex',
        gap: 10,
        overflowX: 'auto',
        padding: '5px 0',
        '&::-webkit-scrollbar': { display: 'none' }
    },
    adCard: {
        minWidth: 160,
        background: '#fff',
        padding: 10,
        borderRadius: 4,
        textAlign: 'center'
    },
    productContainer: {
        [theme.breakpoints.up('md')]: {
            maxWidth: 1280,
            margin: '0 auto',
            padding: 20,
            display: 'flex',
            gap: 15
        }
    },
    leftPane: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            width: 250,
            background: '#fff',
            padding: 15,
            height: 'fit-content',
            position: 'sticky',
            top: 70
        }
    },
    rightPane: {
        flex: 1,
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 60
        }
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        borderBottom: '1px solid #f0f0f0'
    }
}));

const CategoryPage = () => {
    const classes = useStyles();
    const { category } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.getProducts);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [openFilter, setOpenFilter] = useState(false);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        if (products && products.length > 0) {
            if (category === 'all') {
                setFilteredProducts(products);
            } else {
                const searchKeywords = category.toLowerCase().split('-');
                const filtered = products.filter(product => {
                    const prodCategory = product.category ? product.category.toLowerCase() : '';
                    const shortTitle = product.title.shortTitle.toLowerCase();
                    const tagline = product.tagline ? product.tagline.toLowerCase() : '';
                    return searchKeywords.some(keyword =>
                        keyword.length > 2 && (
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

    const title = category === 'all' ? 'All Products' : category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return (
        <Box className={classes.component}>
            {/* Custom Mobile Header */}
            <Box className={classes.header}>
                <IconButton onClick={() => history.push('/')} style={{ padding: 8 }}>
                    <ArrowBack />
                </IconButton>
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" style={{ height: 20, marginLeft: 5 }} alt="" />
                <Typography style={{ fontSize: 16, fontWeight: 500, marginLeft: 10, flex: 1 }}>{title}</Typography>
                <IconButton style={{ padding: 8 }}><Search style={{ fontSize: 20 }} /></IconButton>
                <IconButton style={{ padding: 8 }}><FavoriteBorder style={{ fontSize: 20 }} /></IconButton>
                <IconButton style={{ padding: 8 }}>
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCart style={{ fontSize: 20 }} />
                    </Badge>
                </IconButton>
                <IconButton style={{ padding: 8 }}><AccountCircle style={{ fontSize: 20 }} /></IconButton>
            </Box>

            {/* Sort & Filter Bar */}
            <Box className={classes.sortFilterBar}>
                <Box className={classes.sfButton}><Sort /> Sort</Box>
                <Box className={classes.sfButton} onClick={() => setOpenFilter(true)}><FilterList /> Filter</Box>
            </Box>

            {/* Mobile Filter Drawer */}
            <Drawer anchor="right" open={openFilter} onClose={() => setOpenFilter(false)}>
                <Box style={{ width: '85vw', height: '100%' }}>
                    <Box className={classes.drawerHeader}>
                        <IconButton onClick={() => setOpenFilter(false)} style={{ padding: 0, marginRight: 15 }}>
                            <Close />
                        </IconButton>
                        <Typography style={{ fontSize: 18, fontWeight: 600 }}>Filters</Typography>
                    </Box>
                    <Box style={{ padding: 15 }}>
                        <FilterSidebar />
                    </Box>
                </Box>
            </Drawer>

            {/* Sub-category Chips */}
            <Box className={classes.chipContainer}>
                <Box className={classes.chip}><img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" style={{ width: 20 }} alt="" /> New Launches</Box>
                <Box className={classes.chip}><img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" style={{ width: 20 }} alt="" /> Premium Brands</Box>
                <Box className={classes.chip}><img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" style={{ width: 20 }} alt="" /> Washer with Dryer</Box>
                <Box className={classes.chip}><img src="https://rukminim1.flixcart.com/flap/128/128/image/69cff05093e620a.png?q=100" style={{ width: 20 }} alt="" /> Steam Wash</Box>
            </Box>

            {/* Ad Section */}
            <Box className={classes.adSection}>
                <Box className={classes.adCardContainer}>
                    <Box className={classes.adCard}>
                        <Box style={{ background: '#f0f0f0', borderRadius: '50%', width: 80, height: 80, margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/v/f/v/-original-imagp7ggpznzuzhv.jpeg?q=70" style={{ width: 50 }} alt="" />
                        </Box>
                        <Typography style={{ fontSize: 12, fontWeight: 600 }}>Heater Machines</Typography>
                        <Typography style={{ fontSize: 11, color: '#878787' }}>starting 14590</Typography>
                        <Typography style={{ fontSize: 11, color: '#2874f0', marginTop: 5 }}>Explore all &gt;</Typography>
                    </Box>
                    {filteredProducts.slice(0, 3).map(p => (
                        <Box key={p.id} className={classes.adCard}>
                            <img src={p.url} style={{ height: 80, objectFit: 'contain' }} alt="" />
                            <Typography style={{ fontSize: 12, fontWeight: 600, marginTop: 10 }}>{p.title.shortTitle}</Typography>
                            <Typography style={{ fontSize: 11, color: '#388e3c' }}>{p.price.discount} Off</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box className={classes.productContainer}>
                <Box className={classes.leftPane}>
                    <FilterSidebar />
                </Box>
                <Box className={classes.rightPane}>
                    <Box style={{ background: '#fff', display: 'flex', flexWrap: 'wrap' }}>
                        {
                            (filteredProducts && filteredProducts.length > 0) ? (() => {
                                // Randomize and repeat to get 25 products
                                const targetCount = 25;
                                let displayProducts = [...filteredProducts];

                                // Simple shuffle
                                displayProducts = displayProducts.sort(() => Math.random() - 0.5);

                                // Pad if needed
                                while (displayProducts.length < targetCount) {
                                    displayProducts = [...displayProducts, ...filteredProducts];
                                }

                                // Slice to exact count and render
                                return displayProducts.slice(0, targetCount).map((product, index) => (
                                    <ProductCard
                                        product={{
                                            ...product,
                                            // Append unique suffix to avoid key collisions and distinct ID for React
                                            id: `${product.id}-random-${index}`
                                        }}
                                        key={index}
                                    />
                                ));
                            })() : (
                                <Box style={{ padding: 20, textAlign: 'center', width: '100%' }}>No products found</Box>
                            )
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CategoryPage;

