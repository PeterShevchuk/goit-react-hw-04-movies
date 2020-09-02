import { DETALACTORSTYPE } from "../constants";

let initialState = [];

const DetalActors = (state = initialState, actions) => {
  //   console.log(actions.payload);
  switch (actions.type) {
    case DETALACTORSTYPE:
      return actions.payload;
    default:
      return state;
  }
};

export default DetalActors;
