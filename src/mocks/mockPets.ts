import { IPet, IPetData } from "../types/petsTypes";

export const listOfPets: IPet[] = [
  {
    name: "test0",
    id: "test0",
    animal: "dog",
    sex: "male",
    picture: "test0",
    age: 1,
    description: "test0",
    specialTreatment: "test0",
  },
  {
    name: "test1",
    id: "test1",
    animal: "cat",
    sex: "female",
    picture: "test1",
    age: 2,
    description: "test1",
    specialTreatment: "test1",
  },
];

export const testNewPet: IPetData = {
  name: "testNewPet",
  animal: "dog",
  sex: "female",
  picture: "testNewPet",
  age: 8,
  description: "testNewPet",
  specialTreatment: "testNewPet",
};

export const testPetsGenerator = (numberOfPets: number) => {
  const testList = [];

  for (let i = 0; i < numberOfPets; i++) {
    testList.push({
      name: `testName${i}`,
      id: `testId${i}`,
      animal: i % 2 === 0 ? "dog" : "cat",
      sex: i % 3 === 0 ? "male" : "female",
      picture: `testPicture${i}`,
      age: i,
      description: `testDescription${i}`,
      specialTreatment: `testSpecialTreatment${i}`,
    });
  }
  return testList as IPet[];
};
