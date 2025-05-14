import { configureStore } from '@reduxjs/toolkit';
// Reducers import
import menuReducer from './menuSlice';
// Create Redux store
export const store = configureStore({
    reducer: {
        // Connecting the reducers
        menu: menuReducer,
    },
});
// Types for typing useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>;// Type of the entire state
export type AppDispatch = typeof store.dispatch;// Type of the dispatch