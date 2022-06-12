import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ListPage from "./ListPage";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the ListPage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with 'Pet's'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ListPage />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("heading", { level: 1, name: "Pet's" })
      ).toBeInTheDocument();
    });
  });

  describe("When it's called and there are a token on the local Storage", () => {
    test("Then it should call dispatch", () => {
      Object.defineProperty(window, "localStorage", {
        value: { getItem: jest.fn(() => "token") },
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ListPage />
          </Provider>
        </BrowserRouter>
      );
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
