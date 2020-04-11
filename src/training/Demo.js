import { createStore } from 'redux';
import myReducer from './reducers';
import { status, sort } from './actions';

const store = createStore(myReducer);
console.log('Default: ', store.getState());

// Change status
store.dispatch(status());
console.log('TOGGLE_STATUS: ', store.getState());

// Update sort
store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('SORT: ', store.getState());