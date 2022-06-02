import { Navigate, Route, Routes } from "react-router-dom";
import RouterLimiter from "./components/RouterLimiter/RouterLimiter";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const App = () => (
  <>
    <Routes>
      <Route
        path="/"
        element={
          <RouterLimiter>
            <Navigate to="/list" />
          </RouterLimiter>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </>
);

export default App;
