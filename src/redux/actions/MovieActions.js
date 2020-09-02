import { DETALMOVIESTYPE } from "../constants";

const DetalMovie = (value) => ({
  type: DETALMOVIESTYPE,
  payload: value,
});
export default DetalMovie;
