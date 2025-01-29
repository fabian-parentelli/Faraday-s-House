import { iconsRepository } from '../dao/manager/index.manager.js';

export default class IconsRepository {

    newIcon = async (icon) => {
        const result = await iconsRepository.newIcon(icon);
        return result;
    };
    
    getIcons = async () => {
        const result = await iconsRepository.getIcons();
        return result;
    };

};