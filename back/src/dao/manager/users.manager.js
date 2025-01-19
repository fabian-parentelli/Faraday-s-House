import { userModel } from '../models/users.model.js';

export default class User {

    register = async (user) => {
        return await userModel.create(user);
    };

    getByEmail = async (email) => {
        return await userModel.findOne({ email: email }).lean();
    };

    update = async (user) => {
        return await userModel.findByIdAndUpdate(user._id, user, { lean: true, new: true });
    };

    getByIdPass = async (passId) => {
        return await userModel.findOne({ passId: passId });
    };

};