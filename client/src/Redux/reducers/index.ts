import { combineReducers } from "redux";
import cars from "./cars";
import searchedCars from "./searchedCars";
import favouriteCars from "./favouriteCars";

export default combineReducers({
    cars: cars,
    searchedCars: searchedCars,
    favouriteCars: favouriteCars,
});
