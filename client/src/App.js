import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
import { Box } from '@material-ui/core'

import Footer from './Components/Footer/Footer';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/shipping' component={Shipping} />
              <Route exact path='/payment' component={Payment} />
              <Route exact path='/orders' component={Orders} />
              <Route exact path='/category/:category' component={CategoryPage} />
              {/* <Route exact path= '/product/:id' component={Product} /> */}
              <Route exact path='/product/:id' component={DetailView} />
              <Route component={NotFound} />
            </Switch>
          </Box>
          <Footer />
          <BottomNav />
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider >
  );
}

export default App;
