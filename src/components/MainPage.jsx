
import React, { useEffect, useState } from 'react';
import '../styles/app.scss';
import { Skeleton } from './Skeleton.jsx';
import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';
import pizz from '../assets/pizzas.json';
import { useSelector, useDispatch } from 'react-redux';
import { updatePizzas, initialPizzas, setSelectedType } from '../store/actions/PizzaActions';
import { getPizzas } from '../api/getPizzasApi';

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  let pizzas = useSelector((state) => state.filteredPizzas);
  const selectedType = useSelector((state) => state.selectedType) || 'Все';
  const Allpizzas = useSelector((state) => state.pizzas);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const result = await getPizzas();
        console.log(result);
        dispatch(initialPizzas([...result]));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    try {
      if (selectedType !== '') {
        pizzas=Allpizzas
        selectedType==="Все"?
        dispatch(updatePizzas(pizzas))
        :
        dispatch(updatePizzas(pizzas.filter((pizza) => pizza.category === selectedType)));
      } else {
        dispatch(updatePizzas(Allpizzas));
      }
    } catch (e) {
      console.log(e);
    }
  }, [selectedType]);
  console.log('pizzas');
  console.log(pizzas);
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">{selectedType.toString() || 'Все'}</h2>
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