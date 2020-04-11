import * as types from './../constants/ActionTypes'

const initialState = {
    by: 'status',
    value: 1
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.SORT:
        return { ...state, ...payload }

    default:
        return state
    }
}
