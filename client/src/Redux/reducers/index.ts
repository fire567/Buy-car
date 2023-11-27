import { combineReducers } from "redux";
import cars from "./cars";
import searchedCars from "./searchedCars";
import favouriteCars from "./favouriteCars";
import chosenOption from "./chosenOption";

export default combineReducers({
    cars: cars,
    searchedCars: searchedCars,
    favouriteCars: favouriteCars,
    chosenOption: chosenOption,
});
