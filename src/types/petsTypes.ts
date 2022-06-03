export interface Pet {
  name: string;
  id: string;
  type: "dog" | "cat";
  sex: "male" | "female";
  picture: string;
  age: number;
  description: string;
  specialTreatment: string;
}
