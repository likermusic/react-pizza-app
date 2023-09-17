import React, { createContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';


import useRoutesWrapper from '../hooks/useRoutesWrapper';
import NotFound from '../pages/NotFound';
import Layout from './Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

export const AppContext = createContext()

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({ type: 0, isUp: true });

   useEffect(() => {
    // Проверки
    const category = activeCategory == 0 ? '' : activeCategory;
    const sort = ['rating', 'price', 'title'];
    const order = activeSort.isUp ? 'asc' : 'desc';
    const search = 'аывавыак';
    fetch(`https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?category=${category}&sortBy=${sort[activeSort.type]}&order=${order}&search=чч`)
      .then(resp => resp.json())
      .then(data => setPizzas(data))
      .finally(() => setLoading(false))
      .catch(err => {
        //Отрисовать в поле пицц сообщение об ошибке
        alert(`Ошибка запроса к серверу: ${err.message}`);
      });
  }, [activeCategory, activeSort])

  return (  
    // <>
    //   {routes}
    // </> 
      <AppContext.Provider value={{pizzas, setPizzas, loading, setLoading, activeCategory, setActiveCategory, activeSort, setActiveSort}}>
        <Routes >
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/> } />
                <Route path='cart' element={<Cart />} />
                <Route path='about' element="<h1>О нас</h1><span>Hello</span>" />
              <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>       
      </AppContext.Provider>
  )
}

export default App
  //    <Layout>
  //  {routes} 
  //    </Layout>
