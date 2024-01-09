import React, { memo } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/Skeleton";
import { useAppSelector } from "../hooks/redux";

const Home = memo(function () {
  const pizzas = useAppSelector((state) => state.pizzas.items);
  const status = useAppSelector((state) => state.pizzas.status);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      {status !== "loading" &&
        status !== "rejected" &&
        (pizzas.length > 0 ? (
          <h2 className="content__title">Все пиццы</h2>
        ) : (
          <h2 className="content__title">Пиццы не найдены</h2>
        ))}
      <div className="content__items">
        {/* @ts-ignore */}
        {status == "resolved" && status !== "rejected" ? (
          pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
        ) : status == "loading" ? (
          <div>
            {[...new Array(10)].map((_, ind) => (
              <Skeleton key={ind} />
            ))}
          </div>
        ) : (
          <h2 className="content__title">
            Ошибка запроса на сервер. <br /> Попробуйте позже
          </h2>
        )}
      </div>
    </>
  );
});

export default Home;
