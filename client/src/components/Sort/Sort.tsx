import { FC, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSearchedCars } from "../../Redux/actions";
import { sortOptions } from "../../consts";
import { sortByYear, sortByName, sortByPrice } from "../../consts";
import style from "./Sort.module.css";

const Sort: FC = () => {
    const [isDropDownOn, setIsDropDownOn] = useState(false);
    const [chosenOption, setChosenOption] = useState<string>("");
    const cars = useSelector<any>((state) => state.cars);
    const searchedCars: any = useSelector<any>((state) => state.searchedCars);
    const dispatch = useDispatch();

    const sortHandler = (option: string) => {
        setChosenOption(option);
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
            {chosenOption ? <div>{chosenOption}</div> : <div>Не выбрано</div>}
            {isDropDownOn ? (
                <div className={style.dropDownWrapper}>
                    {sortOptions.map((option: any) => (
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
