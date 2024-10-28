const INITIAL_STATE = {
  name: "",
};

export const filtersSlice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "name/setFilter": {
      return {
        ...state,
        name: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
