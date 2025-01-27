import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
      <button
        onClick={() => {
          handleClick('');
        }}
      >
        All
      </button>
    </div>
  );
}

export default CategoryMenu;


// import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_CURRENT_CATEGORY } from "../../utils/actions";

// function CategoryMenu({ closeMenu }) {
//   const [state, dispatch] = useStoreContext();
//   const { categories } = state;

//   const handleClick = (id) => {
//     dispatch({
//       type: UPDATE_CURRENT_CATEGORY,
//       currentCategory: id,
//     });
//     if (closeMenu) closeMenu(); // Optional closing callback
//   };

//   return (
//     <>
//       {categories.map((category) => (
//         <button
//           key={category._id}
//           onClick={() => handleClick(category._id)}
//         >
//           {category.name}
//         </button>
//       ))}
//       <button onClick={() => handleClick("")}>All</button>
//     </>
//   );
// }

// export default CategoryMenu;
