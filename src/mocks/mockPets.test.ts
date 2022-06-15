import { testPetsGenerator } from "./mockPets";

describe("Given the testPetGenerator function", () => {
  describe("When it's called and receives 1", () => {
    test("Then it should return a list of pets with 1 pet named 'testNamed0'", () => {
      const expectedList = [
        {
          name: "testName0",
          id: "testId0",
          animal: "dog",
          sex: "male",
          picture: "testPicture0",
          age: 0,
          description: "testDescription0",
          specialTreatment: "testSpecialTreatment0",
        },
      ];

      const returnedList = testPetsGenerator(1);

      expect(returnedList).toEqual(expectedList);
    });
  });
});
