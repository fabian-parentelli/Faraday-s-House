import { userManager } from '../dao/manager/index.manager.js';

export default class UserRepository {

    register = async (user) => {
        const result = await userManager.register(user);
        return result;
    };

    getByEmail = async (email) => {
        const result = await userManager.getByEmail(email);
        return result;
    };
    
    update = async (user) => {
        const result = await userManager.update(user);
        return result;
    };
    
    getByIdPass = async (passId) => {
        const result = await userManager.getByIdPass(passId);
        return result;
    };
}