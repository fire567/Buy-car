import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavouriteCars } from "../../Redux/actions";
import style from "./Car.module.css";

interface car {
    id: number;
    color: string;
    brand: string;
    img_src: string;
    model: string;
    price: string;
    model_year: number;
}

interface carProps {
    car: car;
}

const Car: FC<carProps> = ({ car }) => {
    const favourites = useSelector((state: any) => state.favouriteCars);
    const [carId, setCarId] = useState<any>();
    const dispatch = useDispatch();

    const AddToFavouritesHandler = (car: any) => {
        setCarId(car.id);
        let newFavourite = favourites;
        newFavourite.push(car);
        dispatch(getFavouriteCars(newFavourite));
    };

    return (
        <div className={style.carWrapper}>
            <img
                className={style.car_pic}
                src={car?.img_src ?? undefined}
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
