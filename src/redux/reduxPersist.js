import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
  
import rootReducer from './rootReducer';
  
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [rootReducer.filter],
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer);
  
export const configurePersistStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });
  
    const persistor = persistStore(store);
  
    return { store, persistor };
};