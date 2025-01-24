import { messagesRepository } from "../repositories/index.repositories.js";
import { MessagesNotFound } from '../utils/custom-exceptions.utils.js';

const newMessage = async (message) => {
    const result = await messagesRepository.newMessage(message);
    if (!result) throw new MessagesNotFound('No pudimos guardar tu mensaje');
    return { status: 'success', result };
};

export { newMessage };