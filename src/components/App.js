import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useRoutesWrapper from '../hooks/useRoutesWrapper';
import NotFound from '../pages/NotFound';
import Layout from './Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

import { useSelector, useDispatch } from 'react-redux';
import { setPizzas } from '../store/slices/pizzasSlice';
// import _ from 'lodash';

export const AppContext = createContext();

function App() {
  // const size = 1;
  // const arr = [
  //   { size: 2, qty: 3 },
  //   { size: 1, qty: 2 },
  // ];

  const activeCategory = useSelector((state) => state.filter.category);
  const { isUp, type } = useSelector((state) => state.filter.sort);
  const pizzas = useSelector((state) => state.pizzas.items);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  // const [activeSort, setActiveSort] = useState({ type: 0, isUp: true });
  const [search, setSearch] = useState('');

  const store = { pizzas, setPizzas, loading, setLoading, setSearch };

  useEffect(() => {
    // Проверки
    const category = activeCategory == 0 ? '' : activeCategory;
    const sort = ['rating', 'price', 'title'];
    const order = isUp ? 'asc' : 'desc';

    Promise.all([
      fetch(
        `https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?category=${category}&sortBy=${sort[type]}&order=${order}`
      ),
      fetch(
        `https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?search=${search}`
      ),
    ])
      .then(([sorted, searched]) => {
        return Promise.all([sorted.json(), searched.json()]);
      })
      .then(([sorted, searched]) => {
        // console.log(sorted,searched);
        const newData = sorted.filter((sortedItem) =>
          searched.some((searchedItem) => sortedItem.id == searchedItem.id)
        );
        dispatch(setPizzas(newData));
      })

      // fetch(`https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?search=${search}`)
      // fetch(`https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?category=${category}&sortBy=${sort[activeSort.type]}&order=${order}`)
      // .then(resp => resp.json())
      // .then(data => setPizzas(data))
      .finally(() => setLoading(false))
      .catch((err) => {
        //Отрисовать в поле пицц сообщение об ошибке
        alert(`Ошибка запроса к серверу: ${err.message}`);
      });
  }, [activeCategory, type, isUp, search]);

  return (
    // <>
    //   {routes}
    // </>
    <AppContext.Provider value={store}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='about' element='<h1>О нас</h1><span>Hello</span>' />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
//    <Layout>
//  {routes}
//    </Layout>
