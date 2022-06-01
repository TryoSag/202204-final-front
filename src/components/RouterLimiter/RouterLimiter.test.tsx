import { render } from "@testing-library/react";
import RouterLimiter from "./RouterLimiter";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-redux"),
  useNavigate: () => mockNavigate,
}));

let mockUseSelector = false;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockUseSelector,
}));

describe("Given the RouterLimiter function", () => {
  describe("When it's call and the user is not logged", () => {
    test("Then it should call navigate with '/login'", () => {
      mockUseSelector = false;

      render(
        <RouterLimiter>
          <p>test</p>
        </RouterLimiter>
      );

      expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
  });

  describe("When it's call and the user is logged", () => {
    test("Then it should call navigate with '/list'", () => {
      mockUseSelector = true;

      render(
        <RouterLimiter>
          <p>test</p>
        </RouterLimiter>
      );

      expect(mockNavigate).toHaveBeenCalledWith("/list");
    });
  });
});
