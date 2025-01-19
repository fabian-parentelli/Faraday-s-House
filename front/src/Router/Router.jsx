import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import ScrollToTop from "../components/utils/ScrollToTop";
import NavBar from "../containers/Navbar/Navbar";
import Body from "../containers/Body/Body";
import UserRegister from "../containers/user/UserRegister/UserRegister";
import UserLogin from "../containers/user/UserLogin/UserLogin";
import WhatEmail from "../containers/user/WhatEmail/WhatEmail";
import NewPassword from "../containers/user/NewPassword/NewPassword";
import UserPanel from "../containers/UserPanel/UserPanel";

const RouterComp = () => {

    const { user } = useLoginContext();

    return (
        <BrowserRouter>
            <ScrollToTop>

                <NavBar />

                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/register" element={<UserRegister />} />
                    <Route path="login" element={<UserLogin />} />
                    <Route path="what_email" element={<WhatEmail />} />
                    <Route path="password/:token" element={<NewPassword />} />

                    {user.logged &&
                        <>
                            <Route path="user_panel" element={<UserPanel />} />
                        </>
                    }
                </Routes>

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default RouterComp;