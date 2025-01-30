import { iconsRepository } from "../repositories/index.repositories.js";
import { IconsNotFound } from '../utils/custom-exceptions.utils.js';

const newInfo = async (info) => {
    const result = await iconsRepository.newInfo(info);
    if (!result) throw new IconsNotFound('Error al guardar la informaciòn');
    return { status: 'success', result };
};

const newIcon = async (icon) => {
    const result = await iconsRepository.newIcon(icon);
    if (!result) throw new IconsNotFound('Error al guardar el Icono');
    return { status: 'success', result };
};

const getInfo = async () => {
    const result = await iconsRepository.getInfo();
    if (!result) throw new IconsNotFound('Error para encontrar la informaciòn');
    return { status: 'success', result: result[0] };

};

const getIcons = async () => {
    const result = await iconsRepository.getIcons();
    if (!result) throw new IconsNotFound('Error para obtener información');
    return { status: 'success', result };
};

const updInfo = async (info) => {
    const information = await iconsRepository.getInfo();
    if (!information) throw new IconsNotFound('Error para encontrar la informaciòn');
    const newInfo = { ...information[0], ...info };
    const result = await iconsRepository.updInfo(newInfo);
    if (!information) throw new IconsNotFound('Error al modificar tu información');
    return { status: 'success', result };
};

export { newIcon, getIcons, getInfo, newInfo, updInfo };