import { FC } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../Redux/actions";
import { ICars } from "../../types/types";
import CrasManupulations from "../../components/CarsManipulations/CarsManipulations";
import Car from "../../components/Car/Car";
import style from "./Cars.module.css";

interface IAllCars {
    cars: ICars[];
    searchedCars: ICars[];
}

const Cars: FC = () => {
    const cars: ICars[] = useSelector((state: IAllCars) => state.cars);
    const searchedCars: ICars[] = useSelector(
        (state: IAllCars) => state.searchedCars
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars());
    }, []);

    return cars ? (
        <div className={style.carsPageWrapper}>
            <CrasManupulations />
            <div className={style.carsListWrapper}>
                {searchedCars.length > 0
                    ? searchedCars.map((car: ICars) => (
                          <Car car={car} key={car.id} />
                      ))
                    : cars.map((car: ICars) => <Car car={car} key={car.id} />)}
            </div>
        </div>
    ) : null;
};

export default Cars;
