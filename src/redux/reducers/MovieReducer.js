import { DETALMOVIESTYPE } from "../constants";

let initialState = [];

const DetalMovie = (state = initialState, actions) => {
  //   console.log(actions.payload);
  switch (actions.type) {
    case DETALMOVIESTYPE:
      return actions.payload;
    default:
      return state;
  }
};

export default DetalMovie;
