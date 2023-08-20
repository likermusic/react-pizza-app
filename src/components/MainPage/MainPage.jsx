import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import Skeleton from '../skeleton/skeleton';
import '../../styles/app.scss';
import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';

export const MainPage=()=> {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetch('https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items')
        .then(resp => resp.json())
        .then(data => setPizzas(data));
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading ? (
            <>
              {[...Array(10)].map((_, index) => (
                <Skeleton key={index} />
              ))}
            </>
          ) : (
            pizzas.map(pizza => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
