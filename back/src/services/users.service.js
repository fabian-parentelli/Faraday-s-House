import { userRepository } from "../repositories/index.repositories.js";
import { UserNotFound } from '../utils/custom-exceptions.utils.js';
import { createHash, isValidPassword } from '../utils/hashedPassword.utils.js';
import { registerSuccess } from '../utils/html/registerSuccess.utils.js';
import { sendEmail } from './email.service.js';
import { generateToken, passwordToken } from '../utils/jwt.utils.js';
import { v4 as uuidv4 } from 'uuid';
import config from '../config/dotEnv.config.js';
import { recoverPassword_HTML } from '../utils/html/recoverPassword.utils.js';

const register = async (user) => {
    const isUser = await userRepository.getByEmail(user.email);
    if (isUser) throw new UserNotFound('Ya existe un usuario con este email');
    user.password = createHash(user.password);
    const result = await userRepository.register(user);
    if (!result) throw new UserNotFound('No se puede registrar al usuario');
    const emailTo = {
        to: user.email,
        subject: 'Registro exitoso',
        html: await registerSuccess(result)
    };
    await sendEmail(emailTo);
    const accesToken = generateToken(result);
    return { status: 'success', accesToken };
};

const login = async (user) => {
    const isUser = await userRepository.getByEmail(user.email);
    if (!isUser) throw new UserNotFound('Email no válido');
    const comparePassword = isValidPassword(isUser, user.password);
    if (!comparePassword) throw new UserNotFound('La contraseña es incorrecta');
    if (!isUser.active) throw new UserNotFound('Error de permisos, comunícate con nosotros');
    delete isUser.password;
    const accesToken = generateToken(isUser);
    return { status: 'success', accesToken };
};

const recoverPassword = async ({ email }) => {
    const user = await userRepository.getByEmail(email);
    if (!user) throw new UserNotFound('Email no válido');   
    user.passId = uuidv4();
    const result = await userRepository.update(user);
    if (!result) throw new UserNotFound('No se puede guardar la clave generada');
    user.recoverPassword = `${config.backUrl}/api/user/inter_pass/${user.passId}`;
    const emailTo = {
        to: user.email,
        subject: 'Recuperar contraseña',
        html: await recoverPassword_HTML(user.recoverPassword)
    };
    await sendEmail(emailTo);
    return { status: 'success' };
};

const current = (user) => {
    const newUser = { ...user };
    return newUser;
};

const interPass = async (id) => {
    const user = await userRepository.getByIdPass(id);
    if (!user) throw new UserNotFound('Usuario no encontrado');    
    const tokenPass = passwordToken(user.email);
    const url = `${config.forntUrl}/password/${tokenPass}`;
    return url;
};

const newPassword = async ({ password: newPassword }, { user: email }) => {
    const user = await userRepository.getByEmail(email);
    if (!user) throw new UserNotFound('usuario no encontrado');
    const comparePassword = isValidPassword(user, newPassword);
    if (comparePassword) throw new UserNotFound('No es valida esa contraseña');
    const hasPass = createHash(newPassword);
    user.password = hasPass;
    user.passId = null;
    const result = await userRepository.update(user);
    if (!result) throw new UserNotFound('La contraseña nueva no se puede guardar');
    delete user.password;
    if (user.passId) delete user.passId;
    return { status: 'success', user };
};

export { register, login, recoverPassword, current, interPass, newPassword };