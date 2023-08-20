
import { Error404 } from "../pages/Error404";
import {HOME_ROUTE, 
        BASKET_ROUTE
    } from "../utils/routes";
import Basket from "../pages/Basket";
import Home from "../pages/Home";


export const routes = [
    {
      path: HOME_ROUTE,
      element: <Home />,
    },
  {
    path: BASKET_ROUTE,
    element: <Basket />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];