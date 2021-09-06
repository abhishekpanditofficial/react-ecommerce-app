import { createSelector } from 'reselect';

const selectCategory = state => state.category;


export const selectCurrentCategory = createSelector(
  [selectCategory],
  category => category.currentCategory
);

export const selectCurrentCity = createSelector(
    [selectCategory],
    category => category.city
  );