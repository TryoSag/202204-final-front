import { render } from "@testing-library/react";
import RouterRedirectList from "./RouterRedirectList";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Given the RouterLimiter function", () => {
  describe("When it's call and the user is logged", () => {
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
});
