import { combineReducers } from 'redux';
import { reducer as usersReducer } from './users/reducer';

export const reducer = combineReducers({
    users: usersReducer
    // e.g. products, other data related things
});
