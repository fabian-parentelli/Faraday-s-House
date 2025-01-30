import { iconsModel } from '../models/icons.model.js';
import { icons_infoModel } from '../models/icons_info.model.js';

export default class Icons {

    newInfo = async (info) => {
        return await icons_infoModel.create(info);
    };

    newIcon = async (icon) => {
        return await iconsModel.create(icon);
    };

    getInfo = async () => {
        return await icons_infoModel.find().lean();
    };


    getIcons = async () => {
        return await iconsModel.find().lean();
    };

    updInfo = async (info) => {
        return await icons_infoModel.findByIdAndUpdate(info._id, info, { new: true, lean: true });
    };
};