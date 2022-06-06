import { Navigate, Route, Routes } from "react-router-dom";
import RouterRedirectList from "./components/RouterRedirectList/RouterRedirectList";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const App = () => (
  <>
    <Routes>
      <Route
        path="/"
        element={
          <RouterRedirectList>
            <Navigate to="/list" />
          </RouterRedirectList>
        }
      />
      <Route
        path="/list"
        element={
          <RouterRedirectList>
            <Navigate to="/list" />
          </RouterRedirectList>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </>
);

export default App;
