const INITIAL_STATE = {
  items: JSON.parse(localStorage.getItem("contacts")) ?? [],
};

export const contactsSlice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "items/addContact": {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case "items/deleteContact": {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
