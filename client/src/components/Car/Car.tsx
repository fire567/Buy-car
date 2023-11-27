import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavouriteCars } from "../../Redux/actions";
import { ICars } from "../../types/types";
import style from "./Car.module.css";

interface ICarProps {
    car: ICars;
}

interface IFavouriteCars {
    favouriteCars: ICars[];
}

const Car: FC<ICarProps> = ({ car }) => {
    const favourites = useSelector(
        (state: IFavouriteCars) => state.favouriteCars
    );
    const [carId, setCarId] = useState<number>();
    const dispatch = useDispatch();

    const AddToFavouritesHandler = (car: ICars) => {
        setCarId(car.id);
        let newFavourite = favourites;
        newFavourite.push(car);
        dispatch(getFavouriteCars(newFavourite));
    };

    return (
        <div className={style.carWrapper}>
            <img
                className={style.car_pic}
                src={`http://localhost:5000/${car?.img_src}` ?? undefined}
                alt={`${car.brand} ${car.model}`}
            />
            <div key={car.id} className={style.car_info}>
                <div className={style.header}>
                    <div className={style.brand}>
                        {" "}
                        {car.brand} {car.model}{" "}
                    </div>
                    <div className={style.car_extra_info}>
                        <span className={style.model_year}>
                            {car.model_year}
                        </span>
                        <span className={style.color}>
                            {car.color.toLowerCase()}
                        </span>
                    </div>
                    <div className={style.price}>
                        <span>{car.price}</span>
                    </div>
                </div>
                <div className={style.footer}>
                    <button className={style.buy_button}>Купить</button>
                    <img
                        className={style.favourite_btn}
                        src={
                            carId === car.id
                                ? "../../../public/assets/Heart.svg"
                                : "../../../public/assets/Empty_heart.svg"
                        }
                        onClick={() => AddToFavouritesHandler(car)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Car;
