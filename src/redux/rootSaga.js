import { all } from "redux-saga/effects";

import { watchHome } from "../pages/Home/saga";

function* rootSaga() {
  yield all([
    watchHome(),
  ]);
}
export default rootSaga;