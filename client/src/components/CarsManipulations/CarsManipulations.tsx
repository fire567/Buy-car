import { FC } from "react";
import Sort from "../Sort/Sort";
import SearchBar from "../SearchBar/SearchBar";
import style from "./CarsManipulations.module.css";

const CrasManupulations: FC = () => {
    return (
        <div className={style.crasManupulationsWrapper}>
            <Sort />
            <SearchBar />
        </div>
    );
};

export default CrasManupulations;
