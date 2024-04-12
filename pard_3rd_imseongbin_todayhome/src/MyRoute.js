import { Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import Layout from "./Pages/Layout/Layout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import EditProfile from "./Pages/EditPage/EditProfile";

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route element={<Layout />}>
                <Route path="/profilePage" element={<ProfilePage />} />
                <Route path="/editProfile" element={<EditProfile />} />
            </Route>
        </Routes>
    );
}

export default MyRoutes;