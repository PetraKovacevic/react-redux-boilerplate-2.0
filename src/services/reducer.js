import { combineReducers } from 'redux';

import { reducer as sessionReducer } from './session/reducer';
import { reducer as storageReducer } from './storage/reducer';

export const reducer = combineReducers({
    session: sessionReducer,
    storage: storageReducer
});
