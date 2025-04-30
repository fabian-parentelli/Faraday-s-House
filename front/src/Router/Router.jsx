import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import ScrollToTop from "../components/utils/ScrollToTop";
import NavBar from "../containers/NavBar/NavBar";
import Body from "../containers/Body/Body";
import Login from "../containers/users/Login/Login";
import Register from "../containers/users/Register/Register";
import Footer from "../containers/Footer/Footer";
import TheBooks from "../containers/pages/TheBooks/TheBooks";

const RouterComp = () => {

    const { user } = useLoginContext();

    return (
        <BrowserRouter>
            <ScrollToTop>
                
                <NavBar />

                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/thebook" element={<TheBooks />} />
                </Routes>

                <Footer />

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default RouterComp;