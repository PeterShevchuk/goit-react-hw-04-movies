import { LOADERTYPE } from "../constants";

const Loader = (value) => ({
  type: LOADERTYPE,
  payload: value,
});
export default Loader;
