import { FirebaseDBService, cloudinaryService } from '../service/services';
import { getRecipeData } from '../store/slices/recipeSlice';

const Cloudinary = new cloudinaryService();
const DBService = new FirebaseDBService(Cloudinary);

export const createRecipe = async (data) => {
    await DBService.createRecipe(data);
};

export const createRecipe_test = async () => {
    DBService.createRecipe_test();
};

export const uploadAllImages = async (files) => {
    const fileURLs = [];
    for (let i = 0; i < files.length; i++) {
        const fileData = await Cloudinary.uploadFile(files[i]);
        fileURLs.push(fileData.url);
    }
    return fileURLs;
};

export const getAllRecipes = () => {
    return DBService.getAllRecipes();
};

export const getRecipeById = async (id, dispatch) => {
    const recipeData = await DBService.getRecipeById(id);
    if (recipeData) {
        dispatch(getRecipeData(recipeData));
    }
};

export const getRecipesByOwner = (id) => {
    return DBService.getRecipesByOwner(id);
};
