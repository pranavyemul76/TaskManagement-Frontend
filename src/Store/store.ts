import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Task/TaskSlice';

const store = configureStore({
    reducer: {
        tasks: taskReducer,
      
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: false, // This can be adjusted based on your needs
      }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
