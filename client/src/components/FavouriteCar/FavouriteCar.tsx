import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavouriteCars } from "../../Redux/actions";
import { ICars } from "../../types/types";
import style from "./FavouriteCar.module.css";

interface IFavouriteCarProps {
    car: ICars;
    index: number;
}

interface IFavouriteCars {
    favouriteCars: ICars[];
}

const FavouriteCar: FC<IFavouriteCarProps> = ({ car, index }) => {
    const favouriteCars: ICars[] = useSelector(
        (state: IFavouriteCars) => state.favouriteCars
    );
    const dispatch = useDispatch();

    const deleteFromFavouritesHandler = (index: number) => {
        const deletedfavouriteCars = favouriteCars.filter(
            (el: ICars, elIndex: number) => {
                return elIndex !== index;
            }
        );
        dispatch(getFavouriteCars(deletedfavouriteCars));
    };

    return (
        <div className={style.FavouriteCarWrapper}>
            <img
                className={style.car_pic}
                src={`http://localhost:5000/${car?.img_src}` ?? undefined}
                alt={`${car.brand} ${car.model}`}
            />
            <div key={car.id} className={style.favourite_car_info}>
                <div className={style.header}>
                    <div className={style.brand}>
                        {" "}
                        {car.brand} {car.model}{" "}
                    </div>
                    <div className={style.description}>{car.description}</div>
                    <div className={style.model_year}>
                        Год: {car.model_year}
                    </div>
                    <div className={style.color}>
                        Цвет: {car.color.toLowerCase()}
                    </div>
                    <div className={style.price}>
                        <span>От {car.price}</span>
                    </div>
                </div>
                <div className={style.footer}>
                    <button className={style.equipment_button}>
                        Выбрать комплектацию
                    </button>
                    <div
                        className={style.delete_btn}
                        onClick={() => deleteFromFavouritesHandler(index)}
                    >
                        <img
                            className={style.delete_pic}
                            src="../../../public/assets/Delete-pic.svg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavouriteCar;
