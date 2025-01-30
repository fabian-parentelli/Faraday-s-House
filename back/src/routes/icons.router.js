import Router from './routes.js';
import * as iconsController from '../controllers/icons.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class IconsRouter extends Router {
    init() {
        this.post('/info', ['MASTER'], passportEnum.JWT, iconsController.newInfo);
        this.post('/', ['MASTER'], passportEnum.JWT, iconsController.newIcon);
        this.get('/info', ['PUBLIC'], passportEnum.NOTHING, iconsController.getInfo);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, iconsController.getIcons);
        this.put('/', ['MASTER'], passportEnum.JWT, iconsController.updInfo);
    };
};