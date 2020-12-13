// constants
import { navConstants } from "./constants";

export const toggleNav = (status) => async (dispatch) => {
  dispatch({
    type: navConstants.NAV_STATUS,
    payload: status,
  });
};
