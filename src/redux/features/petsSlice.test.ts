import { Pet } from "../../types/petsTypes";
import petsReducer, { getPetsActionCreator } from "./petsSlice";

const listOfPets: Pet[] = [
  {
    name: "test",
    id: "test",
    animal: "dog",
    sex: "male",
    picture: "test",
    age: 1,
    description: "test",
    specialTreatment: "test",
  },
  {
    name: "test",
    id: "test",
    animal: "cat",
    sex: "female",
    picture: "test",
    age: 2,
    description: "test",
    specialTreatment: "test",
  },
];

describe("Given the getPetsActionCreator function", () => {
  describe("When it receives a list of pets", () => {
    test("Then it should return a list of pets", () => {
      const action = getPetsActionCreator(listOfPets);
      const returnedListOfPets = petsReducer(listOfPets, action);

      expect(returnedListOfPets).toEqual(listOfPets);
    });
  });
});
