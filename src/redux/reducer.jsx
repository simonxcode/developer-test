import {
  ADD_ITEM,
  // DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state, ...action
        // wishList: ,
      };
    // case DELETE_ITEM:
    //   return {
    //     wishList: ,
    //   };
    default:
      return {
        state
        // wishList: ,
      };
  }
};

export default reducer;