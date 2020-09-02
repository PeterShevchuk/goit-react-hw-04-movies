import { LOADERTYPE } from "../constants";

let initialState = true;

const Loader = (state = initialState, actions) => {
  // console.log(actions);
  switch (actions.type) {
    case LOADERTYPE:
      return actions.payload;
    default:
      return state;
  }
};

export default Loader;
