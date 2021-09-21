import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplates/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplates/DetailMoviePage/modules/reducer";
import authReducer from "../../containers/AdminTemplates/Auth/modules/reducer";
import addUserReducer from "../../containers/AdminTemplates/AddUsers/modules/reducer";
const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
    authReducer,
    addUserReducer,
})

export default rootReducer;