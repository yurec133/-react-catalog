export const setLoading = payload => ({
  type: "SET_LOADING",
  payload
});

export const fetchItems = (category, sortBy) => dispatch => {
  dispatch(setLoading(false));
  fetch(
    `/pizzas?${
      category !== null ? `category=${category}` : ""
    }&_sort=${sortBy.type}&_order=desc`
  )
    .then(resp => resp.json())
    .then(json => {
      dispatch(setItems(json));
    });
};

export const setItems = items => ({
  type: "SET_ITEMS",
  payload: items
});
