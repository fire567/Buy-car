import { FC } from "react";
import { useSelector } from "react-redux";
import { ICars } from "../../types/types";
import style from "./FavouriteCars.module.css";
import FavouriteCar from "../../components/FavouriteCar/FavouriteCar";

interface IAllCars {
    favouriteCars: ICars[];
}

const FavouriteCars: FC = () => {
    const cars: ICars[] = useSelector((state: IAllCars) => state.favouriteCars);

    return (
        <div className={style.favouriteCarsWrapper}>
            <div className={style.favourites_count}>
                Избранные товары — {cars.length} позиций
            </div>
            <div className={style.carsListWrapper}>
                {cars.map((car: ICars, index: number) => (
                    <FavouriteCar car={car} index={index} key={index} />
                ))}
            </div>
        </div>
    );
};

export default FavouriteCars;
