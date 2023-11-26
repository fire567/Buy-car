export const sortOptions = [
    {
        id: 0,
        name: "Не выбрано",
    },
    {
        id: 0,
        name: "По названию",
    },
    {
        id: 1,
        name: "По дате выпуска",
    },
    {
        id: 2,
        name: "По цене",
    },
];

export const sortByYear = (cars: any) => {
    const sortedCars = [...cars].sort(
        (a: any, b: any) => a.model_year - b.model_year
    );
    return sortedCars;
};

export const sortByPrice = (cars: any) => {
    const sortedCars = [...cars].sort(
        (a: any, b: any) => Number(a.price.slice(1)) - Number(b.price.slice(1))
    );
    return sortedCars;
};

export const sortByName = (cars: any) => {
    const sortedCars = [...cars].sort((a: any, b: any) => {
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
