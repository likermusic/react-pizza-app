
import React, { useEffect, useState } from 'react';
import '../styles/app.scss';
import { Skeleton } from './Skeleton.jsx';
import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';
import pizz from '../assets/pizzas.json';
import { useSelector, useDispatch } from 'react-redux';
import { updatePizzas, initialPizzas, setSelectedType } from '../store/actions/PizzaActions';

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.filteredPizzas);
  const selectedType = useSelector((state) => state.selectedType);

  useEffect(() => {
    const updatedPizzas = [...pizz];
    dispatch(initialPizzas(updatedPizzas));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    try {
      let filteredPizzas;
      if (selectedType !== '') {
        if (selectedType === 'Все') {
          dispatch(updatePizzas(pizz));
        } else {
          filteredPizzas = pizzas.filter((pizza) => pizza.category === selectedType);
          dispatch(updatePizzas(filteredPizzas));
        }
      } else {
        filteredPizzas = pizzas;
        dispatch(updatePizzas(filteredPizzas));
      }
    } catch (e) {
      console.log(e);
    }
  }, [selectedType]);

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
            pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
          )}
        </div>
      </div>
    </div>
  );
};