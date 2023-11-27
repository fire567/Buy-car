import { FC } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchedCars, setOption } from "../../Redux/actions";
import { sortOptions } from "../../consts";
import { sortByYear, sortByName, sortByPrice } from "../../consts";
import { ICars, IOptions } from "../../types/types";
import style from "./Sort.module.css";

interface IAllCars {
    cars: ICars[];
    searchedCars: ICars[];
}

interface IChosenOption {
    chosenOption: string;
}

const Sort: FC = () => {
    const [isDropDownOn, setIsDropDownOn] = useState(false);
    const cars: ICars[] = useSelector((state: IAllCars) => state.cars);
    const chosenOption: string = useSelector(
        (state: IChosenOption) => state.chosenOption
    );
    const searchedCars: ICars[] = useSelector(
        (state: IAllCars) => state.searchedCars
    );
    const dispatch = useDispatch();

    const sortHandler = (option: string) => {
        dispatch(setOption(option));
        if (option === "По дате выпуска") {
            if (searchedCars.length > 0) {
                dispatch(getSearchedCars(sortByYear(searchedCars)));
            } else {
                dispatch(getSearchedCars(sortByYear(cars)));
            }
        } else if (option === "По названию") {
            if (searchedCars.length > 0) {
                dispatch(getSearchedCars(sortByName(searchedCars)));
            } else {
                dispatch(getSearchedCars(sortByName(cars)));
            }
        } else if (option === "По цене") {
            if (searchedCars.length > 0) {
                dispatch(getSearchedCars(sortByPrice(searchedCars)));
            } else {
                dispatch(getSearchedCars(sortByPrice(cars)));
            }
        }
    };

    return (
        <div
            className={style.sortWrapper}
            onClick={() => setIsDropDownOn(!isDropDownOn)}
        >
            <img
                className={style.arrows_pic}
                src="../../../public/assets/Arrows.svg"
            />
            {chosenOption.length > 0 ? (
                <div>{chosenOption}</div>
            ) : (
                <div>Не выбрано</div>
            )}
            {isDropDownOn ? (
                <div className={style.dropDownWrapper}>
                    {sortOptions.map((option: IOptions) => (
                        <div
                            key={option.id}
                            className={style.dropDownOption}
                            onClick={() => {
                                sortHandler(option.name);
                            }}
                        >
                            {option.name}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default Sort;
