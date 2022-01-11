import { combineReducers } from "redux";
import bookReducer from "../features/todoSlide/todoSlide"
const rootReducer = combineReducers({
    books: bookReducer
});
export default rootReducer;