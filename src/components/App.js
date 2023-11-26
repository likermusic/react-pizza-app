import React, {
  createContext,
  lazy,
  useEffect,
  useState,
  Suspense,
} from "react";
import { Routes, Route } from "react-router-dom";
// import useRoutesWrapper from '../hooks/useRoutesWrapper';
import Layout from "./Layout";
import Home from "../pages/Home";

import { useSelector, useDispatch } from "react-redux";
import { fetchPizzas, setPizzas } from "../store/slices/pizzasSlice";
import Loader from "./Loader";
// import Pizza from '../pages/Pizza';

//TODO Сделать для Cart NotFound роутов lazy
const Pizza = lazy(() => import("../pages/Pizza"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Cart = lazy(() => import("../pages/Cart"));

export const AppContext = createContext();

function App() {
  const activeCategory = useSelector((state) => state.filter.category);
  const { isUp, type } = useSelector((state) => state.filter.sort);
  const pizzas = useSelector((state) => state.pizzas.items);
  const search = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();

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
