import { messagesModel } from '../models/messages.model.js';

export default class Messages {

    newMessage = async (message) => {
        return await messagesModel.create(message);
    };
}