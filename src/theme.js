const base = {
    easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    colorWhite: 'rgb(255, 255, 255)',
    colorBlack: 'rgb(0, 0, 0)',
};

const dark = {
    id: 'dark',
    ...base,
    backgroundColor: url('../images/rainny3.jpg'),
    textColor: 'black',
    navColor: 'indianred',
};

const light = {
    id: 'light',
    ...base,
    backgroundImage: url('../images/sunny1.jpg'),
    textColor: 'white',
    navColor: 'lightcoral',
};

export const theme = { dark, light };
