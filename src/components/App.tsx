import React, { lazy, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import useRoutesWrapper from '../hooks/useRoutesWrapper';
import Layout from "./Layout";
import Home from "../pages/Home";

import { fetchPizzas } from "../store/slices/pizzasSlice";
import Loader from "./Loader";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import Pizza from '../pages/Pizza';

//TODO Сделать для Cart NotFound роутов lazy
const Pizza = lazy(() => import("../pages/Pizza"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Cart = lazy(() => import("../pages/Cart"));

function App() {
  const activeCategory = useAppSelector((state) => state.filter.category);
  const { isUp, type } = useAppSelector((state) => state.filter.sort);
  const pizzas = useAppSelector((state) => state.pizzas.items);
  const search = useAppSelector((state) => state.filter.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [activeCategory, type, isUp, search]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="pizzas/:id" element={<Pizza />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
//    <Layout>
//  {routes}
//    </Layout>
