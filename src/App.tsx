import { Navigate, Route, Routes } from "react-router-dom";
import RouterLimiter from "./navigationUtils/routerLimiter";
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
      <Route
        path="/login"
        element={
          <RouterLimiter>
            <LoginPage />
          </RouterLimiter>
        }
      />
      <Route
        path="/register"
        element={
          <RouterLimiter>
            <RegisterPage />
          </RouterLimiter>
        }
      />
    </Routes>
  </>
);

export default App;
