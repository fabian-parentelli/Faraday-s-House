import { iconsRepository } from "../repositories/index.repositories.js";
import { IconsNotFound } from '../utils/custom-exceptions.utils.js';

const newIcon = async (icon) => {
    const result = await iconsRepository.newIcon(icon);
    if (!result) throw new IconsNotFound('No pudimos guardar tu mensaje');
    return { status: 'success', result };
};

const getIcons = async () => {
    const result = await iconsRepository.getIcons();
    if (!result) throw new IconsNotFound('No pudimos guardar tu mensaje');
    return { status: 'success', result }
};

export { newIcon, getIcons };