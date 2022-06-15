import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { listOfPets } from "../../mocks/mockPets";
import { testUser } from "../../mocks/mockUsers";
import store from "../../redux/store/store";
import CreateEditForm from "./CreateEditForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: ":test1" }),
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
  });
  describe("When it's called and receives the pageName 'New Pet'", () => {
    test("Then it should render a button with the text 'Create'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditForm pageName="New Pet" />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("button", { name: "Create" })
      ).toBeInTheDocument();
    });
  });

  describe("When it's called and receives the pageName 'Edit Pet'", () => {
    test("Then it should render a button with the text 'Edit'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditForm pageName="Edit Pet" />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument();
    });
  });

  describe("When it's called and all the inputs had valid information and clicked 'Create' button", () => {
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
      const submitButton = screen.getByRole("button", { name: "Create" });

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

  describe("When it's called and receives pageName 'New Pet' and there are token in the local storage", () => {
    describe("and all the inputs had correct data and clicked the 'Create' button", () => {
      test("Then it should call dispatch", () => {
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
        const submitButton = screen.getByRole("button", { name: "Create" });

        userEvent.type(nameInput, "testText");
        userEvent.type(pictureInput, "testText");
        userEvent.type(descriptionInput, "testText");
        userEvent.type(specialTreatmentInput, "testText");
        userEvent.click(submitButton);

        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });

  describe("When it's called and receives pageName 'New Pet' and clicked the 'Create' button", () => {
    test("Then it should call toast.warning with 'There are fields without filling'", () => {
      toast.warning = jest.fn();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditForm pageName="New Pet" />
          </Provider>
        </BrowserRouter>
      );

      const submitButton = screen.getByRole("button", { name: "Create" });

      userEvent.click(submitButton);

      expect(toast.warning).toHaveBeenCalledWith(
        "There are fields without filling"
      );
    });
  });

  describe("When it's called and receives the pageName 'Edit Pet' and there are token in the local storage", () => {
    describe("and id by params and all the inputs had correct data and clicked the 'Edit' button", () => {
      test("Then it should call dispatch", () => {
        const userMockSlice = createSlice({
          name: "user",
          initialState: testUser,
          reducers: {},
        });
        const petsMockSlice = createSlice({
          name: "pets",
          initialState: listOfPets,
          reducers: {},
        });
        const mockStore = configureStore({
          reducer: { pets: petsMockSlice.reducer, user: userMockSlice.reducer },
        });
        render(
          <BrowserRouter>
            <Provider store={mockStore}>
              <CreateEditForm pageName="Edit Pet" />
            </Provider>
          </BrowserRouter>
        );

        const nameInput = screen.getByLabelText("Name");
        const pictureInput = screen.getByLabelText("Picture");
        const descriptionInput = screen.getByLabelText("Description");
        const specialTreatmentInput =
          screen.getByLabelText("Special Treatment");
        const submitButton = screen.getByRole("button", { name: "Edit" });

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
