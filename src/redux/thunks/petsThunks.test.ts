import axios from "axios";
import { getPetsActionCreator } from "../features/petsSlice";
import { listOfPets } from "../../mocks/mockPets";
import { getPetsThunk } from "./petsThunks";

describe("Given the getPetsThunk function", () => {
  describe("When it's called and receives a token", () => {
    test("Then it should call dispatch with action", async () => {
      const token = "testToken";
      const dispatch = jest.fn();
      const response = { data: listOfPets };
      axios.get = jest.fn().mockResolvedValue(response);

      const expectedAction = getPetsActionCreator(listOfPets);

      const thunk = getPetsThunk(token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
