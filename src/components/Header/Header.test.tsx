import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Header from "./Header";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the Header component", () => {
  describe("When it's called", () => {
    test("Then it should render 1 image with the alternative text 'Pet's House logo'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header pageName={"Pet's"} adminUser={false} />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("Pet's House logo")).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a pageName 'Pet's' and adminUser true", () => {
    test("Then it should render 1 heading with the text 'Pet's'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header pageName={"Pet's"} adminUser={true} />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("heading", { level: 1, name: "Pet's" })
      ).toBeInTheDocument();
    });

    test("Then it should render 1 button with the text +New'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header pageName={"Pet's"} adminUser={true} />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByRole("button", { name: "+New" })).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a pageName 'More about' and adminUser true", () => {
    test("Then it should render 1 heading with the text 'More about'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header pageName={"More about"} adminUser={true} />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("heading", { level: 1, name: "More about" })
      ).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a pageName 'List of Pet's' and adminUser false", () => {
    test("Then it should not render any button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header pageName={"List of Pet's"} adminUser={false} />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.queryByRole("button")).toBeNull();
    });
  });

  describe("When it's called and receives a pageName 'Pet's', adminUser true and a click on the button", () => {
    test("Then it should call navigate", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header pageName={"Pet's"} adminUser={true} />
          </Provider>
        </BrowserRouter>
      );

      const buttonToClick = screen.getByRole("button", { name: "+New" });

      userEvent.click(buttonToClick);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
