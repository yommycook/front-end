import { FirebaseService } from '../service/services';
import { loginSuccess, logout } from '../store/slices/authSlice';

const FireBaseAuth = new FirebaseService();

const onGoogleLogin = async (dispatch) => {
    const info = await FireBaseAuth.onLogin();
    if (info) {
        const {
            user: { uid, email, photoURL },
        } = info;
        dispatch(loginSuccess({ uid, email, profile: photoURL }));
    }
};

const onSignOut = async (dispatch) => {
    const signOut = await FireBaseAuth.signOut();
    if (signOut) dispatch(logout());
};

export { onGoogleLogin, onSignOut };
