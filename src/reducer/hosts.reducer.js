const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
let init = {
    number:0,
}

export const counter = (state = init, action = {}) => {
    switch(action.type) {
        case 'INCREMENT':
            return {number:state.number + 1};
        case 'DECREMENT':
            return {number:state.number - 1};
        default: return state;
    }
}

//action
export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};