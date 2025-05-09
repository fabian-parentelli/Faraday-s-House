import Router from './routes.js';
import * as userController from '../controllers/users.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class UserRouter extends Router {
    init() {
        this.post('/register', ['PUBLIC'], passportEnum.NOTHING, userController.register);
        this.post('/login', ['PUBLIC'], passportEnum.NOTHING, userController.login);
        this.post('/recover_password', ['PUBLIC'], passportEnum.NOTHING, userController.recoverPassword);
        this.get('/current', ['PUBLIC'], passportEnum.JWT, userController.current);
        this.get('/inter_pass/:id', ['PUBLIC'], passportEnum.NOTHING, userController.interPass);
        this.put('/new_password', ['PUBLIC'], passportEnum.JWT, userController.newPassword);
    };
};