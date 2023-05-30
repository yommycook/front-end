import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recipe: null,
};

const recipeSlice = createSlice({
    name: 'recipeData',
    initialState,
    reducers: {
        getRecipeData: (state, action) => {
            state.recipe = action.payload;
        },
    },
});

export const { getRecipeData } = recipeSlice.actions;

export default recipeSlice.reducer;
