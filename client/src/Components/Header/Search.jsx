import { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, InputBase, List, ListItem, Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
  search: {
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#f0f5ff',
    display: 'flex',
    border: '1px solid #71b1fe',
    alignItems: 'center',
    padding: '2px 12px'
  },
  searchIcon: {
    color: '#2874f0',
    display: 'flex',
    paddingRight: 8
  },
  inputRoot: {
    fontSize: 14,
    width: '100%'
  },
  inputInput: {
    padding: '8px 0',
    width: '100%',
    color: '#212121'
  },
  list: {
    position: 'absolute',
    color: '#000',
    background: '#FFFFFF',
    marginTop: 45,
    width: 'calc(100% - 30px)',
    zIndex: 1500,
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '0 0 8px 8px'
  }
}));

const Search = () => {
  const classes = useStyle();
  const [text, setText] = useState('');
  const [open, setOpen] = useState(true);

  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const getText = (val) => {
    setText(val);
    setOpen(false);
  };

  return (
    <Box style={{ position: 'relative', width: '100%' }}>
      <Box className={classes.search}>
        <Box className={classes.searchIcon}>
          <SearchIcon style={{ fontSize: 20 }} />
        </Box>
        <InputBase
          placeholder={window.innerWidth <= 600 ? "Search for Products" : "Search for Products, Brands and More"}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => getText(e.target.value)}
          value={text}
        />
      </Box>
      {
        text && (
          <List className={classes.list} hidden={open}>
            {
              products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                <ListItem key={product.id}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                    onClick={() => { setOpen(true); setText(''); }}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              ))
            }
          </List>
        )
      }
    </Box>
  );
};

export default Search;