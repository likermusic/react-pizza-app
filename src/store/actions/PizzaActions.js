

export const updatePizzas = (pizzas) => ({
    type: 'UPDATE_PIZZAS',
    payload: pizzas,
  });
  
  export const setSelectedType = (selectedType) => ({
    type: 'SET_SELECTED_TYPE',
    payload: selectedType,
  });

  export const initialPizzas = (pizzas) => ({
    type: 'INITIALIZATE_PIZZAS',
    payload: pizzas,
  });


