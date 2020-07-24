import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PizzaBlock, Categories, SortPopup } from '../components';
import MyLoader from '../components/PizzaBlock/Loader';

import { fetchPizzas } from '../redux/action/pizza';
import { setCategories, setSortBy } from './../redux/action/filters';

const itemsCategories = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const itemsSort = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();

  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  const { isLoaded } = useSelector(({ pizzas }) => {
    return {
      isLoaded: pizzas.isLoaded,
    };
  });

  const { cartItems } = useSelector(({ cart }) => {
    return {
      cartItems: cart.items,
    };
  });

  const { categories, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, categories));
  }, [categories, sortBy, dispatch]);

  const setDispatchCateggories = React.useCallback(
    (index) => {
      dispatch(setCategories(index));
    },
    [dispatch],
  );

  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  const handleAddPizza = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategories={categories}
          onClickCategory={setDispatchCateggories}
          items={itemsCategories}
        />
        <SortPopup onChangeType={onSelectSortType} activeTypeSort={sortBy.type} items={itemsSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                onClickAddPizza={handleAddPizza}
                isLoading={true}
                key={obj.id}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <MyLoader key={index} />)}
      </div>
    </div>
  );
}

export default Home;
