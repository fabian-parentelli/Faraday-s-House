import UserRepository from './user.repositories.js';
import MessagesRepository from './messages.repositories.js';

export const userRepository = new UserRepository();
export const messagesRepository = new MessagesRepository();