export default (state = [], action: any) => {
    if (action.type === "GET_SEARCHED_CARS") {
        return action.payload;
    }

    return state;
};
