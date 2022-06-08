import { listOfPets } from "../../mocks/mockPets";
import petsReducer, {
  deletePetActionCreator,
  getPetsActionCreator,
} from "./petsSlice";

describe("Given the getPetsActionCreator function", () => {
  describe("When it receives a list of pets", () => {
    test("Then it should return a list of pets", () => {
      const action = getPetsActionCreator(listOfPets);
      const returnedListOfPets = petsReducer(listOfPets, action);

      expect(returnedListOfPets).toEqual(listOfPets);
    });
  });
});

describe("Given the deletePetActionCreator function", () => {
  describe("When it receives an id of a pet", () => {
    test("Then it should return the list of pets without the pet with the same id", () => {
      const petToDeleteId = listOfPets[0].id;
      const expectedListLength = listOfPets.length - 1;

      const action = deletePetActionCreator(petToDeleteId);
      const returnedListOfPets = petsReducer(listOfPets, action);

      expect(returnedListOfPets).toHaveLength(expectedListLength);
    });
  });
});
