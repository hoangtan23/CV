import { DARKMODE, LIGHTMODE } from './contants';

const initState = {
    darkMode: false,
};

function reducer(state, action) {
    switch (action.type) {
        case LIGHTMODE:
            return { darkMode: false };
        case DARKMODE:
            return { darkMode: true };
        default:
            return state;
    }
}

export { initState };
export default reducer;
