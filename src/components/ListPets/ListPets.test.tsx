import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import { listOfPets } from "../../mocks/mockPets";
import { testUser } from "../../mocks/mockUsers";
import store from "../../redux/store/store";
import { IPet } from "../../types/petsTypes";
import ListPets from "./ListPets";

const mockSetStateFilter = jest.fn();
const mockSetStatePageList = jest.fn();
const mockSetStatePagination = jest.fn();
const mockFilter: any = (init: string[]) => [init, mockSetStateFilter];
const mockPageList: any = (init: IPet) => [init, mockSetStatePageList];
const mockFPagination: any = (init: number) => [init, mockSetStatePagination];
beforeEach(() => {
  jest
    .spyOn(React, "useState")
    .mockImplementationOnce(mockFilter)
    .mockImplementationOnce(mockPageList)
    .mockImplementationOnce(mockFPagination);
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Given the ListPets component", () => {
  describe("When it's called and there are a pet in store", () => {
    test("Then it should render a image with alternative text 'dog named test0'", () => {
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
        <Provider store={mockStore}>
          <ListPets token={"testToken"} />
        </Provider>
      );

      expect(screen.getByAltText("dog named test0")).toBeInTheDocument();
    });
  });

  describe("When it's called", () => {
    test("Then it should render a list of 3 buttons with images inside with the alternative text 'All icon', 'Cats icon' and 'Dogs icon'", () => {
      render(
        <Provider store={store}>
          <ListPets token={"testToken"} />
        </Provider>
      );

      expect(screen.getByAltText("All icon")).toBeInTheDocument();
      expect(screen.getByAltText("Cats icon")).toBeInTheDocument();
      expect(screen.getByAltText("Dogs icon")).toBeInTheDocument();
    });

    test("Then it should render 2 images with the alternative text 'previous page' and 'next page'", () => {
      render(
        <Provider store={store}>
          <ListPets token={"testToken"} />
        </Provider>
      );

      expect(screen.getByAltText("previous page")).toBeInTheDocument();
      expect(screen.getByAltText("next page")).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a click on filter button", () => {
    test("Then it should call mockSetState", () => {
      render(
        <Provider store={store}>
          <ListPets token={"testToken"} />
        </Provider>
      );

      const filterButton = screen.getByAltText("All icon");
      userEvent.click(filterButton);

      expect(mockSetStateFilter).toHaveBeenCalled();
    });
  });
});
