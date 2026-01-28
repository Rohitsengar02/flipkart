import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { Home, NotFound } from './Components/default';
import Header from './Components/Header/Header';
import BottomNav from './Components/Header/BottomNav';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart';
import Shipping from './Components/Checkout/Shipping';
import Payment from './Components/Checkout/Payment';
import Orders from './Components/Order/Orders';
import CategoryPage from './Components/Category/CategoryPage';
import AllCategories from './Components/Category/AllCategories';
import Profile from './Components/Account/Profile';
import Wishlist from './Components/Account/Wishlist';
import Notifications from './Components/Account/Notifications';
import { Box } from '@material-ui/core'

import Footer from './Components/Footer/Footer';

function AppContent() {
  const location = useLocation();
  const isCategoryPage = location.pathname.startsWith('/category/') || location.pathname === '/all-categories';

  return (
    <>
      <Header />
      <Box style={{ marginTop: isCategoryPage ? 0 : (window.innerWidth <= 600 ? 0 : 55) }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/shipping' component={Shipping} />
          <Route exact path='/payment' component={Payment} />
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/category/:category' component={CategoryPage} />
          <Route exact path='/all-categories' component={AllCategories} />
          <Route exact path='/product/:id' component={DetailView} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/wishlist' component={Wishlist} />
          <Route exact path='/notifications' component={Notifications} />
          <Route component={NotFound} />
        </Switch>
      </Box>
      <Footer />
      <BottomNav />
    </>
  );
}

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider >
  );
}

export default App;
