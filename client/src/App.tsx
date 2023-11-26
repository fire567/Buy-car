import { Global } from "@emotion/react";
import { FC } from "react";
import Cars from "./pages/Cars/Cars";
import FavouriteCars from "./pages/FavouriteCars/FavouriteCars";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { GLOBAL_STYLES } from "./styles/global.styles";
import style from "./App.module.css";

const App: FC = () => {
    return (
        <BrowserRouter>
            <div className={style.appWrapper}>
                <Header />
                <Routes>
                    <Route path="/" element={<Cars />} />
                    <Route path="/favourites" element={<FavouriteCars />} />
                </Routes>
                <Global styles={GLOBAL_STYLES} />
            </div>
        </BrowserRouter>
    );
};

export default App;
