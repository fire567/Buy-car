import { IAction } from "../../types/types";

export default (state = [], action: IAction) => {
    if (action.type === "GET_SEARCHED_CARS") {
        return action.payload;
    }

    return state;
};
