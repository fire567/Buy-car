import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getSearchedCars, setOption } from "../../Redux/actions";
import { ICars } from "../../types/types";
import style from "./SearchBar.module.css";

interface IAllCars {
    cars: ICars[];
    searchedCars: ICars[];
}

const SearchBar: FC = () => {
    const cars: ICars[] = useSelector((state: IAllCars) => state.cars);
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const inputHandler = (text: string) => {
        setText(text);
    };

    const searchHandler = (text: string) => {
        if (text.length > 1) {
            let newCars: ICars[] = [];
            cars.map((car: ICars) => {
                if (
                    `${car.brand} ${car.model}`
                        .toLowerCase()
                        .includes(text.toLowerCase())
                ) {
                    newCars = [...newCars, car];
                }
            });
            dispatch(getSearchedCars(newCars));
        } else {
            dispatch(getSearchedCars([]));
        }
        dispatch(setOption(""));
    };

    return (
        <div className={style.SearchBarWrapper}>
            <input
                className={style.input}
                type="text"
                placeholder="Найти авто"
                onChange={(e) => inputHandler(e.target.value)}
                value={text}
            ></input>
            <img
                className={style.search_button}
                src="../../../public/assets/Search-button.svg"
                onClick={() => {
                    searchHandler(text);
                }}
            />
        </div>
    );
};

export default SearchBar;
