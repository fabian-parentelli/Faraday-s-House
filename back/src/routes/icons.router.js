import Router from './routes.js';
import * as iconsController from '../controllers/icons.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class IconsRouter extends Router {
    init() {
        this.post('/', ['MASTER'], passportEnum.JWT, iconsController.newIcon);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, iconsController.getIcons);
    };
};