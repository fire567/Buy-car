import { FC } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../Redux/actions";
import CrasManupulations from "../../components/CarsManipulations/CarsManipulations";
import Car from "../../components/Car/Car";
import style from "./Cars.module.css";

const Cars: FC = () => {
    const cars: any = useSelector<any>((state) => state.cars);
    const searchedCars: any = useSelector<any>((state) => state.searchedCars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars());
    }, []);

    return cars ? (
        <div className={style.carsPageWrapper}>
            <CrasManupulations />
            <div className={style.carsListWrapper}>
                {searchedCars.length > 0
                    ? searchedCars.map((car: any) => <Car car={car} />)
                    : cars.map((car: any) => <Car car={car} />)}
            </div>
        </div>
    ) : null;
};

export default Cars;
