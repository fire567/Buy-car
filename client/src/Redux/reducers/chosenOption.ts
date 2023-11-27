import { IAction } from "../../types/types";

export default (state = "", action: IAction) => {
    if (action.type === "SET_OPTION") {
        return action.payload;
    }

    return state;
};
