import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterPage from "./RegisterPage";

describe("Given the RegisterPage page", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'Register'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("heading", { level: 1, name: "Register" })
      ).toBeInTheDocument();
    });

    test("Then it should render a label with 'Name'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });
  });
});
