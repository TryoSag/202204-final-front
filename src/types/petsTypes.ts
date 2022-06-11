type Animal = "dog" | "cat";
type Sex = "male" | "female";

export interface IPet {
  name: string;
  id: string;
  animal: Animal;
  sex: Sex;
  picture: string;
  age: number;
  description: string;
  specialTreatment: string;
}

export interface PetInList {
  name: string;
  picture: string;
  animal: Animal;
  sex: Sex;
  id: string;
  token: string;
  adminUser: boolean;
}

export interface IPetData {
  name: string;
  animal: Animal;
  sex: Sex;
  picture: string;
  age: number;
  description: string;
  specialTreatment: string;
}
