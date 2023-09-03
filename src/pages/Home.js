import React, { useState, useEffect } from 'react'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from "../components/Skeleton";


// active={active} setActive={(ind)=>setActive(ind)} pizzas={pizzasToRender} loading={loading} setPizzas={setPizzas} setLoading={setLoading}

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState(0);
  //избавиться от этой стейтовой перем для сортировки - все одно
  const [isUp, setIsUp] = useState(true);

  useEffect(() => {
    // Проверки
    const category = activeCategory == 0 ? '' : activeCategory;
    const sort = 'title';
    const order = 'desc';
    fetch(`https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?category=${category}&sortBy=${sort}&order=${order}`)
      .then(resp => resp.json())
      .then(data => setPizzas(data))
      .finally(() => setLoading(false))
      .catch(err => {
        //Отрисовать в поле пицц сообщение об ошибке
        alert(`Ошибка запроса к серверу: ${err.message}`);
      });
  }, [activeCategory])

  return (
    <>
      <div className="content__top">
        <Categories active={activeCategory} setActive={(ind) => setActiveCategory(ind)} setPizzas={setPizzas} setLoading={setLoading} />
        <Sort active={activeSort} setActive={(ind) => setActiveSort(ind)} isUp={isUp} setIsUp={(isUp) => setIsUp(isUp)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!loading ?
          pizzas.map(pizza => (
            <PizzaBlock key={pizza.id} {...pizza} />
          ))
          :
          <div>
            {
              [...new Array(10)].map((_, ind) => <Skeleton key={ind} />)
            }
          </div>
        }
      </div>
    </>
  )
}

export default Home