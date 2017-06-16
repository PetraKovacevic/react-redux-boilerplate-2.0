import { combineReducers } from 'redux';

import { reducer as loginReducer } from './Login/reducer';

export const reducer = combineReducers({
    login: loginReducer
});
