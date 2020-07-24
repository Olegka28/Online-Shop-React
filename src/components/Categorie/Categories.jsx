import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategories, items, onClickCategory }) {
  return (
    <div>
      <div className="categories">
        <ul>
          <li
            className={activeCategories === null ? 'active' : ''}
            onClick={() => onClickCategory(null)}>
            Все
          </li>
          {items &&
            items.map((item, index) => (
              <li
                className={activeCategories === index ? 'active' : ''}
                onClick={() => onClickCategory(index)}
                key={`${item}_${index}`}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategories: null,
  items: [],
};

export default Categories;
