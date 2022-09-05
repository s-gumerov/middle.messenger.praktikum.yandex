import { IProfile } from "../pages/ProfileEdit/interfaces";

const getPropfileData = () => {
    const data = localStorage.getItem('auth');
    if (!data) {
        return;
    };
    return JSON.parse(data) as IProfile;
};

export const defaultProfileValue = getPropfileData();
