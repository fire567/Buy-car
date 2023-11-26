export default (state = [], action: any) => {
    if (action.type === "GET_FAVOURITE_CARS") {
        return action.payload;
    }

    return state;
};
