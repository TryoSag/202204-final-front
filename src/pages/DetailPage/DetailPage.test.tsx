import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import DetailPage from "./DetailPage";

describe("Given the EditPage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with 'More About'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailPage />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("heading", { level: 1, name: "More About" })
      ).toBeInTheDocument();
    });
  });
});
