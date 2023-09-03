import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';


import useRoutesWrapper from '../hooks/useRoutesWrapper';
import NotFound from '../pages/NotFound';
import Layout from './Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

function App() {
  // const routes = useRoutesWrapper();
  return (  
    // <>
    //   {routes}
    // </> 
    <Routes >
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/> } />
        {/* <Route path='cart' element={<Cart />} /> */}
        <Route path='about' element="<h1>О нас</h1><span>Hello</span>" />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>       
  )
}

export default App
  //    <Layout>
  //  {routes} 
  //    </Layout>
