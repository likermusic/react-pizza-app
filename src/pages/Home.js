import React, { useState, useEffect, useContext } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';
import { AppContext } from '../components/App';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  const pizzas = useSelector((state) => state.pizzas.items);
  const status = useSelector((state) => state.pizzas.status);
  const error = useSelector((state) => state.pizzas.error);

  const dispatch = useDispatch();

  // if (loading == false) {
  //   if (pizzas.length > 0) {
  //     Все пиццы
  //   }  else {
  //     Пиццы не найдены
  //   }
  // }

  // loading == false ? (pizzas.length > 0 ? <h2 className="content__title">Все пиццы</h2> : <h2 className="content__title">Пиццы не найдены</h2>) : null

  // loading == false && (pizzas.length > 0 ? <h2 className="content__title">Все пиццы</h2> : <h2 className="content__title">Пиццы не найдены</h2>)
  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      {status !== 'loading' &&
        status !== 'rejected' &&
        (pizzas.length > 0 ? (
          <h2 className='content__title'>Все пиццы</h2>
        ) : (
          <h2 className='content__title'>Пиццы не найдены</h2>
        ))}
      <div className='content__items'>
        {status == 'resolved' && status !== 'rejected' ? (
          pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
        ) : status == 'loading' ? (
          <div>
            {[...new Array(10)].map((_, ind) => (
              <Skeleton key={ind} />
            ))}
          </div>
        ) : (
          <h2 className='content__title'>
            Ошибка запроса на сервер. <br /> Попробуйте позже
          </h2>
        )}
      </div>
    </>
  );
}

export default Home;

// a=1
// if (a==1) {
//   return 1
// } else if (a==2) {
//   return 2;
// } else {
//   3
// }

// a==1 ? 1 : (a==2 ? 2 : 3)
