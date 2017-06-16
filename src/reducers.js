import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as sevicesReducer } from '@/services/reducer';
import { reducer as signReducer } from '@/scenes/Sign/scenes/reducer';
import { reducer as dataReducer } from '@/data/reducer';

const rootReducer = combineReducers({
    form: formReducer,
    services: servicesReducer,
    sign: signReducer,
    data: dataReducer
});

export default rootReducer;
