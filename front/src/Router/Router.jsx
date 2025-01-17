import Body from "../containers/Body/Body";
import NavBar from "../containers/Navbar/Navbar";
import ScrollToTop from "../components/utils/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRegister from "../containers/user/UserRegister/UserRegister";
import UserLogin from "../containers/user/UserLogin/UserLogin";

const RouterComp = () => {

    return (
        <BrowserRouter>
            <ScrollToTop>

                <NavBar />

                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/register" element={<UserRegister />} />
                    <Route path="login" element={<UserLogin />} />
                </Routes>
                
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default RouterComp;