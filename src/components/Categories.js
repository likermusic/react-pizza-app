import React, { useEffect, useState } from 'react'

function Categories({ setPizzas, setLoading, active, setActive }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  // useEffect(() => {
  //   fetch(`https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?category=${active}`)
  //     .then(resp => resp.json())
  //     .then(data => setPizzas(data))
  //     .finally(() => setLoading(false))
  //     .catch(err => {
  //       //Отрисовать в поле пицц сообщение об ошибке
  //       alert(`Ошибка запроса к серверу: ${err.message}`);
  //     });
  // }, [active])

  return (
    <div className="categories">
      <ul>
        {
          categories.map((category, ind) => (
            <li onClick={() => setActive(ind)} key={ind} className={ind == active ? 'active' : ''}>{category}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories