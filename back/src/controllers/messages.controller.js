import * as messagesService from '../services/messages.service.js';
import { MessagesNotFound } from '../utils/custom-exceptions.utils.js';

const newMessage = async (req, res) => {
    try {
        const result = await messagesService.newMessage({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof MessagesNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newMessage };