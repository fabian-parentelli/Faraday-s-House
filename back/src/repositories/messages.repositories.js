import { messagesManager } from '../dao/manager/index.manager.js';

export default class MessagesRepository {

    newMessage = async (message) => {
        const result = await messagesManager.newMessage(message);
        return result;
    };
}