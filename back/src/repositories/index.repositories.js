import UserRepository from './user.repositories.js';
import MessagesRepository from './messages.repositories.js';
import IconsRepository from './icons.repositories.js';

export const userRepository = new UserRepository();
export const messagesRepository = new MessagesRepository();
export const iconsRepository = new IconsRepository();