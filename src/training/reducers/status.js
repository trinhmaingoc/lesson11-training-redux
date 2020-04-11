import * as types from '../constants/ActionTypes'

const initialState = false

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.TOGGLE_STATUS:
        state = !state;
        return state;

    default:
        return state
    }
}
