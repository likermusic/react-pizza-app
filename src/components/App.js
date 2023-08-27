import React, { useEffect, useState } from 'react'
import { Routes, Route, useRoutes } from 'react-router-dom';
import Layout from './Layout';
import Cart from "../pages/Cart";
import Home from "../pages/Home";

import useRoutesWrapper from '../hooks/useRoutesWrapper';
function App() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Проверки
    fetch('https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items')
      .then(resp => resp.json())
      .then(data => setPizzas(data))
      .finally(() => setLoading(false))
      .catch(err => {
        //Отрисовать в поле пицц сообщение об ошибке
        alert(`Ошибка запроса к серверу: ${err.message}`);
      });
  }, [])

  const routes = useRoutesWrapper();
  return (  
    <Routes >
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home pizzas={pizzas} loading={loading} />} />
        <Route path='cart' element={<Cart />} />
        <Route path='about' element="<h1>О нас</h1><span>Hello</span>" />
        <Route path='*' element="NOT FOUND" />
      </Route>
    </Routes> 
    
      // {routes} 

  )
}

export default App
  //    <Layout>
  //  {routes} 
  //    </Layout>
