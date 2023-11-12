import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import useRoutesWrapper from '../hooks/useRoutesWrapper';
import NotFound from '../pages/NotFound';
import Layout from './Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas, setPizzas } from '../store/slices/pizzasSlice';
// import _ from 'lodash';

export const AppContext = createContext();

function App() {
  const activeCategory = useSelector((state) => state.filter.category);
  const { isUp, type } = useSelector((state) => state.filter.sort);
  const pizzas = useSelector((state) => state.pizzas.items);
  const search = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // Проверки

    dispatch(fetchPizzas());
  }, [activeCategory, type, isUp, search]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
//    <Layout>
//  {routes}
//    </Layout>
