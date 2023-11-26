import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getSearchedCars } from "../../Redux/actions";
import style from "./SearchBar.module.css";

const SearchBar: FC = () => {
    const cars: any = useSelector<any>((state) => state.cars);
    const [text, setText] = useState("");
    const [searchedCars, setSearchedCars] = useState([]);
    const dispatch = useDispatch();

    const inputHandler = (text: string) => {
        setText(text);
    };

    const searchHandler = (text: string) => {
        if (text.length > 1) {
            cars.map((car: any) => {
                if (
                    `${car.brand} ${car.model}`
                        .toLowerCase()
                        .includes(text.toLowerCase())
                ) {
                    let a: any = searchedCars;
                    a.push(car);
                    dispatch(getSearchedCars(a));
                }
            });
        } else {
            dispatch(getSearchedCars([]));
        }
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
