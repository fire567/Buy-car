import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header: FC = () => {
    return (
        <header className={style.headerWrapper}>
            <div className={style.leftSide}>
                <Link to={"/"} className={style.logo_pic}>
                    <img src="../../../public/assets/Logo.svg" />
                </Link>
                <button className={style.catalog}>
                    <img
                        className={style.burger_button_pic}
                        src="../../../public/assets/Burger_button.svg"
                    />
                    Каталог
                </button>
            </div>
            <div className={style.rightSide}>
                <div className={style.address}>
                    Москва, Волгоградский пр-кт, 43, стр 1
                </div>
                <div className={style.number}>+7 800 555 35 35</div>
                <Link to={"favourites"} className={style.favourites}>
                    <img
                        className={style.heart_pic}
                        src="../../../public/assets/Heart.svg"
                    />
                    Избранное
                </Link>
            </div>
        </header>
    );
};

export default Header;
