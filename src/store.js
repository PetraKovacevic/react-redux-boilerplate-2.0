import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';
import { reducer as servicesReducer } from '@/services/reducer';
import { reducer as signReducer } from '@/scenes/Sign/scenes/reducer';
import { reducer as dataReducer } from '@/data/reducer';

const reducers = combineReducers({
    form: formReducer,
    services: servicesReducer,
    sign: signReducer,
    data: dataReducer
});

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;
