const initialState = {
  items: [],
  isLoading: false
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS": {
      return {
        ...state,
        items: action.payload,
        isLoading: true
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    default:
      return state;
  }
};

export default itemsReducer;
