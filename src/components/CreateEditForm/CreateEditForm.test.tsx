import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CreateEditForm from "./CreateEditForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockThunk = jest.fn();
jest.mock("../../redux/thunks/petsThunks", () => ({
  ...jest.requireActual("../../redux/thunks/petsThunks"),
  createPetThunk: () => mockThunk,
}));

describe("Given the CreateEditForm component", () => {
  describe("When it's called", () => {
    test("Then it should render a label with the text 'Name'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditForm pageName="test" />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });
    test("Then it should render a label with the text 'Animal'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditForm pageName="test" />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Animal")).toBeInTheDocument();
    });

    test("Then it should render a label with the text 'Sex'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditForm pageName="test" />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Sex")).toBeInTheDocument();
    });

    test("Then it should render a label with the text 'Age'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditForm pageName="test" />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Age")).toBeInTheDocument();
    });

    test("Then it should render a label with the text 'Picture'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditForm pageName="test" />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Picture")).toBeInTheDocument();
    });

    test("Then it should render a label with the text 'Special Treatment'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditForm pageName="test" />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Special Treatment")).toBeInTheDocument();
    });

    test("Then it should render a button with the text 'Enter'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditForm pageName="test" />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByRole("button", { name: "Enter" })).toBeInTheDocument();
    });
  });

  describe("When it's called and all the inputs had valid information and clicked 'Enter' button", () => {
    test("Then it should reset the value on the inputs", () => {
      const token = "testToken";
      localStorage.setItem("token", token);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditForm pageName="New Pet" />
          </Provider>
        </BrowserRouter>
      );

      const nameInput = screen.getByLabelText("Name");
      const animalSelector = screen.getByLabelText("Animal");
      const sexSelector = screen.getByLabelText("Sex");
      const pictureInput = screen.getByLabelText("Picture");
      const descriptionInput = screen.getByLabelText("Description");
      const specialTreatmentInput = screen.getByLabelText("Special Treatment");
      const submitButton = screen.getByRole("button", { name: "Enter" });

      userEvent.type(nameInput, "testText");
      userEvent.selectOptions(animalSelector, "cat");
      userEvent.selectOptions(sexSelector, "female");
      userEvent.type(pictureInput, "testText");
      userEvent.type(descriptionInput, "testText");
      userEvent.type(specialTreatmentInput, "testText");
      userEvent.click(submitButton);

      expect(nameInput).toHaveValue("");
      expect(animalSelector).toHaveValue("dog");
      expect(sexSelector).toHaveValue("male");
      expect(pictureInput).toHaveValue("");
      expect(descriptionInput).toHaveValue("");
      expect(specialTreatmentInput).toHaveValue("");
    });
  });

  describe("Whenit's called and receives pageName 'New Pet' and there are token in the local storage", () => {
    describe("and all the inputs had correct data and clicked the 'Enter' button", () => {
      test("Then it should call dispatch with createPetThunk with the token and the correct data", () => {
        const token = "testToken";
        localStorage.setItem("token", token);

        render(
          <BrowserRouter>
            <Provider store={store}>
              <CreateEditForm pageName="New Pet" />
            </Provider>
          </BrowserRouter>
        );

        const nameInput = screen.getByLabelText("Name");
        const pictureInput = screen.getByLabelText("Picture");
        const descriptionInput = screen.getByLabelText("Description");
        const specialTreatmentInput =
          screen.getByLabelText("Special Treatment");
        const submitButton = screen.getByRole("button", { name: "Enter" });

        userEvent.type(nameInput, "testText");
        userEvent.type(pictureInput, "testText");
        userEvent.type(descriptionInput, "testText");
        userEvent.type(specialTreatmentInput, "testText");
        userEvent.click(submitButton);

        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });
});
