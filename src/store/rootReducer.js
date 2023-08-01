

import { combineReducers } from "redux";
import userReducer from "./userReducer";
// import personReducer from "./personSlice";

const rootReducer = combineReducers({
  // 定义一个名为`counter`的顶级状态字段，由`counterReducer`处理
  user: userReducer,
  // persons: personReducer
})

export default rootReducer
