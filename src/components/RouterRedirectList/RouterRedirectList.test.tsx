import { render } from "@testing-library/react";
import RouterRedirectList from "./RouterRedirectList";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Given the RouterLimiter function", () => {
  describe("When it's call and there are a token in the local storage", () => {
    test("Then it should call navigate with '/list'", () => {
      Object.defineProperty(window, "localStorage", {
        value: { getItem: jest.fn(() => "token") },
      });

      render(
        <RouterRedirectList>
          <p>test</p>
        </RouterRedirectList>
      );

      expect(mockNavigate).toHaveBeenCalledWith("/list");
    });
  });

  describe("When it's called and there are not a token on localStorage", () => {
    test("Then it should don't call navigate", () => {
      Object.defineProperty(window, "localStorage", {
        value: { getItem: jest.fn(() => null) },
      });

      render(
        <RouterRedirectList>
          <p>test</p>
        </RouterRedirectList>
      );

      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });
});
