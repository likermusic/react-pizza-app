


const initialState = {
    selectedType: 'Все',
    pizzas: [],
    filteredPizzas:[], // Здесь будет список всех пицц
  };

 export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_TYPE':
        console.log(action.payload);
        return {
          ...state,
          selectedType: action.payload,
        };
        case 'INITIALIZATE_PIZZAS':
      return {
        ...state,
        pizzas: action.payload,
      };
        case 'UPDATE_PIZZAS':
      return {
        ...state,
        filteredPizzas: action.payload,
      };
      default:
        return state;
    }
  };