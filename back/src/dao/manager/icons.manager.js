import { iconsModel } from '../models/icons.model.js';

export default class Icons {

    newIcon = async (icon) => {
        return await iconsModel.create(icon);
    };

    getIcons = async () => {
        return await iconsModel.find().lean();
    };
}