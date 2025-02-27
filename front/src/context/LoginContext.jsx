import { createContext, useContext, useState } from "react";
import { userCurrentApi } from "../helpers/users/userCurrent.api.js";
import { userRegisterApi } from "../helpers/users/usersRegister.api.js";
import { userLoginApi } from "../helpers/users/userLogin.api.js";

// import { updDataUserApi } from "../helpers/users/updDataUser.api.js";

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        data: null,
        error: null,
        logged: false,
        registered: false,
        update: false
    });

    const register = async (user) => {
        setLoading(true);
        const registerData = await userRegisterApi(user);
        if (registerData.error) {
            setLoading(false);
            return setUser({ error: registerData.error });
        };
        if (registerData.status === 'success') {
            localStorage.setItem('token', registerData.accesToken);
            await current();
        };
        setLoading(false);
    };

    const login = async (user) => {
        setLoading(true);
        const loginData = await userLoginApi(user);
        if (loginData.error) setUser({ ...user, error: loginData.error });
        if (loginData.status === 'success') {
            localStorage.setItem('token', loginData.accesToken);
            await current();
        };
        setLoading(false);
    };

    const logout = () => {
        setUser({ data: null, error: null, logged: false, registered: false });
        localStorage.removeItem('token');
        localStorage.removeItem('path');
    };

    const current = async () => {
        const response = await userCurrentApi();
        if (response && response.user) {
            setUser({ data: response.user, logged: true, registered: true });
        };
    };

    // const updateUser = async (user) => {        
    //     const response = await updDataUserApi(user);
    //     if (response.status === 'success') {
    //         if (response.accesToken) {
    //             localStorage.setItem('token', response.accesToken);
    //             await current();
    //             return { status: 'success' };
    //         } else return { status: 'success' };
    //     } else return { status: 'error' };
    // };

    return (
        <LoginContext.Provider
            value={{
                register, loading, user, current, logout, login
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;