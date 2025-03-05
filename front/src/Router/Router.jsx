import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import ScrollToTop from "../components/utils/ScrollToTop";
import NavBar from "../containers/NavBar/NavBar";
import Body from "../containers/Body/Body";

const RouterComp = () => {

    const { user } = useLoginContext();

    return (
        <BrowserRouter>
            <ScrollToTop>
                
                <NavBar />

                <Routes>
                    <Route path="/" element={<Body />} />

                </Routes>

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default RouterComp;