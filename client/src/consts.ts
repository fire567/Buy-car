import { ICars } from "./types/types";

export const sortOptions = [
    {
        id: 0,
        name: "Не выбрано",
    },
    {
        id: 1,
        name: "По названию",
    },
    {
        id: 2,
        name: "По дате выпуска",
    },
    {
        id: 3,
        name: "По цене",
    },
];

export const sortByYear = (cars: ICars[]) => {
    const sortedCars = [...cars].sort(
        (a: ICars, b: ICars) => a.model_year - b.model_year
    );
    return sortedCars;
};

export const sortByPrice = (cars: ICars[]) => {
    const sortedCars = [...cars].sort(
        (a: ICars, b: ICars) =>
            Number(a.price.slice(1)) - Number(b.price.slice(1))
    );
    return sortedCars;
};

export const sortByName = (cars: ICars[]) => {
    const sortedCars = [...cars].sort((a: ICars, b: ICars) => {
        if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
            return -1;
        }
        if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    return sortedCars;
};
