const initialState = {
  items: {},
  totalPrice: 0,
  count: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      // console.log(action);
      const currentPizzaitems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id], action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: currentPizzaitems,
      };
      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalCount = allPizzas.length;
      console.log(allPizzas);
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        count: totalCount,
        totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
