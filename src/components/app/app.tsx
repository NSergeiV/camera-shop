import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute } from '../../const/const';

import Catalog from '../../pages/catalog/catalog';
import Layout from '../layout/layout';
import Product from '../../pages/product/product';
import Basket from '../../pages/basket/basket';
import NoPage from '../../pages/no-page/no-page';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Catalog} element={<Layout />}>
            <Route
              index
              element={<Catalog />}
            />
            <Route
              path={AppRoute.Product}
              element={<Product />}
            />
            <Route
              path={AppRoute.Basket}
              element={<Basket />}
            />
          </Route>
          <Route
            path='*'
            element={<NoPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
