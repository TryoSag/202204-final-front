import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Pet from "./Pet";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the Pet component", () => {
  describe("When it's called and receives 'testName', 'testPicture', 'male' and 'dog'", () => {
    test("Then it should render a image with alternative text 'dog named testName'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pet
              name="testName"
              picture="testPicture"
              sex="male"
              animal="dog"
              id="test"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("dog named testName")).toBeInTheDocument();
    });

    test("Then it should render a element of list with the text 'testName'", () => {
      render(
        <BrowserRouter>
          {" "}
          <Provider store={store}>
            <Pet
              key={"testKey"}
              name="testName"
              picture="testPicture"
              sex="male"
              animal="dog"
              id="testId"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByText("testName", { exact: true })).toBeInTheDocument();
    });

    test("Then it should render a image with alternative text 'male icon'", () => {
      render(
        <BrowserRouter>
          {" "}
          <Provider store={store}>
            <Pet
              name="testName"
              picture="testPicture"
              sex="male"
              animal="dog"
              id="test"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("male icon")).toBeInTheDocument();
    });
  });

  describe("When it's called and receives 'nameTest', 'pictureTest', 'female' and 'cat'", () => {
    test("Then it should render a image with alternative text 'cat named nameTest'", () => {
      render(
        <BrowserRouter>
          {" "}
          <Provider store={store}>
            <Pet
              name="nameTest"
              picture="pictureTest"
              sex="female"
              animal="cat"
              id="test"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("cat named nameTest")).toBeInTheDocument();
    });

    test("Then it should render a image with alternative text 'female icon'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pet
              name="nameTest"
              picture="pictureTest"
              sex="female"
              animal="cat"
              id="test"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("female icon")).toBeInTheDocument();
    });
  });

  describe("When it's called and clicked in the image with the alternative text 'edit icon'", () => {
    test("Then it should call navigate", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pet
              name="nameTest"
              picture="pictureTest"
              sex="female"
              animal="cat"
              id="test"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      const editButton = screen.getByAltText("edit icon");

      userEvent.click(editButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When it's called and clicked in the image with the alternative text 'delete icon'", () => {
    test("Then it should call dispatch", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pet
              name="nameTest"
              picture="pictureTest"
              sex="female"
              animal="cat"
              id="test"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      const deleteButton = screen.getByAltText("delete icon");

      userEvent.click(deleteButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called and clicked in the image with the alternative text 'cat named nameTest'", () => {
    test("Then it should call navigate with '/detail:test'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pet
              name="nameTest"
              picture="pictureTest"
              sex="female"
              animal="cat"
              id="test"
              token="testToken"
              adminUser={true}
            />
          </Provider>
        </BrowserRouter>
      );

      const petPicture = screen.getByAltText("cat named nameTest");

      userEvent.click(petPicture);

      expect(mockNavigate).toHaveBeenCalledWith("/detail:test");
    });
  });
});
