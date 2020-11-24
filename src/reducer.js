export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing...
    //token:
    //  "BQBmZPkd8cUXT9zZ5gHDR695OZ_0fFpZ4gbaKH_AEr0HhQf8a4jJXSSMSCIR8I2t9YTjpniuACvWlJo6rM4SF41IlbXSA00T7bu1EoI8L2GkfU0OqnCSTZrKUviFXk0K1miuTlgTwvkvgipjCkpDbbH5G",
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
};

export default reducer;
