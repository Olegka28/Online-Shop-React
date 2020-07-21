import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PizzaBlock, Categories, SortPopup } from '../components';

import { setCategories } from './../redux/action/filters';

const itemsCategories = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const itemsSort = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'prices' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
    };
  });

  const setDispatchCateggories = React.useCallback((index) => {
    dispatch(setCategories(index));
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClick={setDispatchCateggories} items={itemsCategories} />
        <SortPopup items={itemsSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
