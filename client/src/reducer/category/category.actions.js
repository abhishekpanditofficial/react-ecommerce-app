import CategoryActionsTypes from './category.types';




export const updateCategory= item =>({
  type: CategoryActionsTypes.UPDATE_CURRENT_CATEGORY,
  payload: item
});

export const updateCity= item =>({
    type: CategoryActionsTypes.UPDATE_CURRENT_CITY,
    payload: item
  });

