import { iconsRepository } from '../dao/manager/index.manager.js';

export default class IconsRepository {

    newInfo = async (Info) => {
        const result = await iconsRepository.newInfo(Info);
        return result;
    };

    newIcon = async (icon) => {
        const result = await iconsRepository.newIcon(icon);
        return result;
    };
    
    getInfo = async () => {
        const result = await iconsRepository.getInfo();
        return result;
    };

    getIcons = async () => {
        const result = await iconsRepository.getIcons();
        return result;
    };
   
    updInfo = async (info) => {
        const result = await iconsRepository.updInfo(info);
        return result;
    };

};