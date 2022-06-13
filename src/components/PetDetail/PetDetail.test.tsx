import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { listOfPets } from "../../mocks/mockPets";
import { testUser } from "../../mocks/mockUsers";
import PetDetail from "./PetDetail";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: ":test1" }),
}));

describe("Given the PetDetail component", () => {
  describe("When it's called and there are id of a pet in params and the pet in the store", () => {
    test("Then it should render a image with alterantive text 'cat named test1'", () => {
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
            <PetDetail />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("cat named test1")).toBeInTheDocument();
    });
  });

  describe("When it's called and there are id of a pet in params and there are not the pet in the store", () => {
    test("Then it should render a image with alterantive text 'dog named no pet'", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: testUser,
        reducers: {},
      });
      const petsMockSlice = createSlice({
        name: "pets",
        initialState: [listOfPets[0]],
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { pets: petsMockSlice.reducer, user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <PetDetail />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("dog named no pet")).toBeInTheDocument();
    });
  });
});
