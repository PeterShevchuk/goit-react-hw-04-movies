import { DETALACTORSTYPE } from "../constants";

const DetalActors = (value) => ({
  type: DETALACTORSTYPE,
  payload: value,
});
export default DetalActors;
