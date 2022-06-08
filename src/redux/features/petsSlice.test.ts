import { listOfPets } from "../../mocks/mockPets";
import petsReducer, {
  createPetActionCreator,
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

describe("Given the createPetActionCreator function", () => {
  describe("When it receives a new pet", () => {
    test("Then it should return the list with the new Pet added", () => {
      const newPet = listOfPets[0];
      const expectedListLength = listOfPets.length + 1;

      const action = createPetActionCreator(newPet);
      const returnedListOfPets = petsReducer(listOfPets, action);

      expect(returnedListOfPets).toHaveLength(expectedListLength);
    });
  });
});
