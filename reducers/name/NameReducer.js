import { NAME_CHANGE_NAME } from '../types';

INITIAL_STATE = {
    currentName: 'Antoine'
};

export const NameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAME_CHANGE_NAME:
            const newState = Object.assign({}, state, {
                currentName: action.payload
            })
            return newState;
        default:
            return state
    }
};

