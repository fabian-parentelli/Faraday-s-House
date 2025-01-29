import * as iconsService from '../services/icons.service.js';
import { IconsNotFound } from '../utils/custom-exceptions.utils.js';

const newIcon = async (req, res) => {
    try {
        const result = await iconsService.newIcon({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof IconsNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getIcons = async (req, res) => {
    try {
        const result = await iconsService.getIcons();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof IconsNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newIcon, getIcons };