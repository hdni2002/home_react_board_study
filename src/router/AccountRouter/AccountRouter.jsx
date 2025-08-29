import { Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";

function AccountRouter() {
  return (
    <>
      <Routes>
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </>
  );
}

export default AccountRouter;
