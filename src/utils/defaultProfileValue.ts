import { IProfile } from "../pages/ProfileEdit/interfaces";
import UserProfileController from "../controllers/UserProfileController";
import AuthController from "../controllers/AuthController";

const getPropfileData = () => {
    const data = localStorage.getItem('auth');
    if (!data) {
        return;
    };
    return JSON.parse(data) as IProfile;
};

// const getPropfileData = () =>
//     AuthController.checkAuth().then(userData =>
//         userData as IProfile
//     );





export const defaultProfileValue = getPropfileData();
