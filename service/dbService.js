import { FirebaseDBService, cloudinaryService } from '../service/services';
import { loginSuccess, logout } from '../store/slices/authSlice';

const Cloudinary = new cloudinaryService();
const DBService = new FirebaseDBService(Cloudinary);

export const createRecipe = async (data) => {
    DBService.createRecipe(data);
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
