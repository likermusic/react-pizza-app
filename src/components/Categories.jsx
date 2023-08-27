import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedType } from '../store/actions/PizzaActions';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();

  const handleCategoryClick = (index) => {
    setActive(index);
    const selectedType = categories[index];
    dispatch(setSelectedType(selectedType));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={index === active ? 'active' : ''}
            onClick={() => handleCategoryClick(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;