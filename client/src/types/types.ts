export interface ICars {
    id: number;
    color: string;
    brand: string;
    img_src: string;
    model: string;
    price: string;
    model_year: number;
    description: string;
}

export interface IOptions {
    id: number;
    name: string;
}

export interface IAction {
    type: string;
    payload: ICars[];
}
