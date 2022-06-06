import { render } from "@testing-library/react";
import RouterLimiter from "./RouterLimiter";

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
        <RouterLimiter>
          <p>test</p>
        </RouterLimiter>
      );

      expect(mockNavigate).toHaveBeenCalledWith("/list");
    });
  });
});
