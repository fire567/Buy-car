export default (state = [], action: any) => {
    if (action.type === "GET_CARS") {
        return action.payload;
    }

    return state;
};
