import { useState } from 'react';
import {
    Box,
    Typography,
    Checkbox,
    FormControlLabel,
    makeStyles,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Radio,
    RadioGroup
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    filterSection: {
        marginBottom: 20
    },
    filterTitle: {
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'uppercase',
        color: '#212121',
        marginBottom: 10
    },
    filterOption: {
        fontSize: 14,
        color: '#212121',
        '&:hover': {
            color: '#2874f0'
        }
    },
    showMore: {
        fontSize: 13,
        color: '#2874f0',
        cursor: 'pointer',
        fontWeight: 500,
        marginTop: 5,
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    accordion: {
        boxShadow: 'none',
        '&:before': {
            display: 'none'
        },
        margin: '0 !important'
    },
    accordionSummary: {
        padding: 0,
        minHeight: '40px !important',
        '& .MuiAccordionSummary-content': {
            margin: '8px 0'
        }
    },
    accordionDetails: {
        padding: '0 0 10px',
        flexDirection: 'column'
    }
}));

const FilterSidebar = () => {
    const classes = useStyles();
    const [showAllCategories, setShowAllCategories] = useState(false);

    const categories = [
        'Harem Pants',
        'Three-Fourths',
        'Jeans',
        'Tights',
        'Track Pants',
        'Trousers',
        'Chinos'
    ];

    const brands = ['WROGN', 'Levi\'s', 'H&M', 'Roadster', 'Puma', 'Nike', 'Adidas'];
    const colors = ['Black', 'Blue', 'Grey', 'Green', 'Brown', 'Navy Blue'];
    const fabrics = ['Cotton', 'Cotton Blend', 'Denim', 'Polyester'];
    const fits = ['Slim Fit', 'Regular Fit', 'Skinny Fit', 'Relaxed Fit'];
    const sizes = ['28', '30', '32', '34', '36', 'S', 'M', 'L', 'XL', 'XXL'];

    return (
        <Box>
            <Typography style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>
                Filters
            </Typography>

            {/* Category Filter */}
            <Box className={classes.filterSection}>
                <Typography className={classes.filterTitle}>Category</Typography>
                {categories.slice(0, showAllCategories ? categories.length : 4).map((category, index) => (
                    <Box key={index}>
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label={<Typography className={classes.filterOption}>{category}</Typography>}
                        />
                    </Box>
                ))}
                {!showAllCategories && categories.length > 4 && (
                    <Typography
                        className={classes.showMore}
                        onClick={() => setShowAllCategories(true)}
                    >
                        Show 3 more
                    </Typography>
                )}
            </Box>

            {/* Gender Filter */}
            <Accordion className={classes.accordion} defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.filterTitle}>GENDER</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <RadioGroup>
                        <FormControlLabel
                            value="men"
                            control={<Radio size="small" />}
                            label={<Typography className={classes.filterOption}>Men</Typography>}
                        />
                        <FormControlLabel
                            value="women"
                            control={<Radio size="small" />}
                            label={<Typography className={classes.filterOption}>Women</Typography>}
                        />
                        <FormControlLabel
                            value="unisex"
                            control={<Radio size="small" />}
                            label={<Typography className={classes.filterOption}>Unisex</Typography>}
                        />
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>

            {/* Brand Filter */}
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.filterTitle}>BRAND</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    {brands.map((brand, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox size="small" />}
                            label={<Typography className={classes.filterOption}>{brand}</Typography>}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            {/* Color Filter */}
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.filterTitle}>COLOR</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    {colors.map((color, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox size="small" />}
                            label={<Typography className={classes.filterOption}>{color}</Typography>}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            {/* Fabric Filter */}
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.filterTitle}>FABRIC</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    {fabrics.map((fabric, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox size="small" />}
                            label={<Typography className={classes.filterOption}>{fabric}</Typography>}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            {/* Fit Filter */}
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.filterTitle}>FIT</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    {fits.map((fit, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox size="small" />}
                            label={<Typography className={classes.filterOption}>{fit}</Typography>}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            {/* Size Filter */}
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.filterTitle}>SIZE</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    {sizes.map((size, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox size="small" />}
                            label={<Typography className={classes.filterOption}>{size}</Typography>}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FilterSidebar;
