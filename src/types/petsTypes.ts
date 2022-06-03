type Animal = "dog" | "cat";
type Sex = "male" | "female";

export interface Pet {
  name: string;
  id: string;
  animal: Animal;
  sex: Sex;
  picture: string;
  age: number;
  description: string;
  specialTreatment: string;
}
