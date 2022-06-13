import { render } from "@testing-library/react";
import RouterRedirectLogin from "./RouterRedirectLogin";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Given the RouterLimiter function", () => {
  describe("When it's call and there are not a token in the storage", () => {
    test("Then it should call navigate with '/login'", () => {
      Object.defineProperty(window, "localStorage", {
        value: { getItem: jest.fn(() => null) },
      });

      render(
        <RouterRedirectLogin>
          <p>test</p>
        </RouterRedirectLogin>
      );

      expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
  });

  describe("When it's called and there are token on the local Storage", () => {
    test("Then it should don't call navigate", () => {
      Object.defineProperty(window, "localStorage", {
        value: { getItem: jest.fn(() => "token") },
      });

      render(
        <RouterRedirectLogin>
          <p>test</p>
        </RouterRedirectLogin>
      );

      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });
});
