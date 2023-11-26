import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavouriteCars } from "../../Redux/actions";
import style from "./FavouriteCars.module.css";
import FavouriteCar from "../../components/FavouriteCar/FavouriteCar";

const FavouriteCars: FC = () => {
    const cars = useSelector((state: any) => state.favouriteCars);

    return (
        <div className={style.favouriteCarsWrapper}>
            <div className={style.favourites_count}>
                Избранные товары — {cars.length} позиций
            </div>
            <div className={style.carsListWrapper}>
                {cars.map((car: any, index: number) => (
                    <FavouriteCar car={car} index={index} key={index} />
                ))}
            </div>
        </div>
    );
};

export default FavouriteCars;
