import API from "../../api/api";

export const getCars: any = () => async (dispatch: any) => {
    const response = await API.get("cars");

    dispatch({
        type: "GET_CARS",
        payload: response.data,
    });
};

export const getSearchedCars: any = (cars: any) => ({
    type: "GET_SEARCHED_CARS",
    payload: cars,
});

export const getFavouriteCars: any = (cars: any) => ({
    type: "GET_FAVOURITE_CARS",
    payload: cars,
});
