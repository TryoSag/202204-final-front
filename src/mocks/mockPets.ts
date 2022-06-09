import { IPet, PetData } from "../types/petsTypes";

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

export const testNewPet: PetData = {
  name: "testNewPet",
  animal: "dog",
  sex: "female",
  picture: "testNewPet",
  age: 8,
  description: "testNewPet",
  specialTreatment: "testNewPet",
};
