import { userManager } from '../dao/manager/index.manager.js';

export default class UserRepository {

    register = async (user) => {
        const result = await userManager.getByEmail(user);
        return result;
    };
    
    getByEmail = async (email) => {
        const result = await userManager.getByEmail(email);
        return result;
    };

}