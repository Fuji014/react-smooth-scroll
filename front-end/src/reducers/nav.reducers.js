import { navConstants } from "../actions/constants";

const initialState = {
  navIsOpen: false,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case navConstants.NAV_STATUS:
      return {
        ...state,
        navIsOpen: action.payload,
      };

    default:
      return state;
  }
};

export default navReducer;
