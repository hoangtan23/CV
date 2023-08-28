import { DARKMODE, LIGHTMODE } from './contants';

export const setTheme = (payload) => ({
    type: { DARKMODE, LIGHTMODE },
    payload,
});
