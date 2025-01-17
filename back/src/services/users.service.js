import { userRepository } from "../repositories/index.repositories.js";
import { UserNotFound } from '../utils/custom-exceptions.utils.js';
import { createHash, isValidPassword } from '../utils/hashedPassword.utils.js';
import { registerSuccess } from '../utils/html/registerSuccess.utils.js';
import { sendEmail } from './email.service.js';
import { generateToken, passwordToken } from '../utils/jwt.utils.js';

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

const current = (user) => {
    const newUser = { ...user };
    return newUser;
};

export { register, login, current };