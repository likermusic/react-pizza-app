import React, { useEffect, useState } from 'react'

import '../styles/app.scss';
import Header from './Header';
import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';
// import pizzas from '../assets/pizzas.json'

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    // Проверки
    fetch('https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items')
      .then(resp => resp.json())
      .then(data => setPizzas(data));
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map(pizza => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default App