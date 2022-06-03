import { listOfPets } from "../../mocks/mockPets";
import petsReducer, { getPetsActionCreator } from "./petsSlice";

describe("Given the getPetsActionCreator function", () => {
  describe("When it receives a list of pets", () => {
    test("Then it should return a list of pets", () => {
      const action = getPetsActionCreator(listOfPets);
      const returnedListOfPets = petsReducer(listOfPets, action);

      expect(returnedListOfPets).toEqual(listOfPets);
    });
  });
});
