import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/reducers';
import cartReducer from './cart/reducers';
import shopReducer from './shop/reducers';
import directoryReducer from './directory/reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer
