import { IAction } from "../../types/types";

export default (state = [], action: IAction) => {
    if (action.type === "GET_FAVOURITE_CARS") {
        return action.payload;
    }

    return state;
};
