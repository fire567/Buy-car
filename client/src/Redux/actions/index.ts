import API from "../../api/api";
import { ICars } from "../../types/types";

type AsyncAction = {
    (): any;
};

type Action = {
    (cars: ICars[]): any;
};

type DispatchObj = {
    type: string;
    payload: ICars[];
};

type Dispatch = {
    (dispatch: DispatchObj): DispatchObj;
};

type OptionDispatch = {
    type: string;
    payload: string;
};

type Option = {
    (option: string): OptionDispatch;
};

export const getCars: AsyncAction = () => async (dispatch: Dispatch) => {
    const response = await API.get("cars");

    dispatch({
        type: "GET_CARS",
        payload: response.data,
    });
};

export const getSearchedCars: Action = (cars: ICars[]) => ({
    type: "GET_SEARCHED_CARS",
    payload: cars,
});

export const getFavouriteCars: Action = (cars: ICars[]) => ({
    type: "GET_FAVOURITE_CARS",
    payload: cars,
});

export const setOption: Option = (option: string) => ({
    type: "SET_OPTION",
    payload: option,
});
