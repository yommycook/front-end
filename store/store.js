import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import recipeReducer from './slices/recipeSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        recipe: recipeReducer,
    },
});
