import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { listOfPets } from "../../mocks/mockPets";
import { testUser } from "../../mocks/mockUsers";
import DetailPage from "./DetailPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: ":test0" }),
}));

describe("Given the EditPage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with 'More About'", () => {
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
        reducer: {
          pets: petsMockSlice.reducer,
          user: userMockSlice.reducer,
        },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
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
