import * as types from '../constants/ActionTypes';

export const status = (payload) => ({
    type: types.TOGGLE_STATUS,
    payload
});

export const sort = (payload) => ({
    type: types.SORT,
    payload
})
