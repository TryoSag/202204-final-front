import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditPage from "./EditPage";

describe("Given the CreatePage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with 'New Pet'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EditPage />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("heading", { level: 1, name: "Edit Pet" })
      ).toBeInTheDocument();
    });
  });
});
