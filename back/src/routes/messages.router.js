import Router from './routes.js';
import * as messagesController from '../controllers/messages.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class MessagesRouter extends Router {
    init() {
        this.post('/', ['PUBLIC'], passportEnum.NOTHING, messagesController.newMessage);
    };
};