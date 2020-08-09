const initialState = {
  category: null,
  bgBody: "white",
  sortBy: {
    type: 'popular',
    order: 'desc'
  }
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY": {
      return {
        ...state,
        sortBy: action.payload
      };
    }
    case "SET_CATEGORY": {
      return {
        ...state,
        category: action.payload
      };
    }
    case "SET_BODY" : {
      return {
        ...state,
        bgBody: action.payload
      }
    }
    default:
      return state;
  }
};

export default filtersReducer;
