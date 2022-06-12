import axios from "axios";
import {
  createPetActionCreator,
  deletePetActionCreator,
  editedPetActionCreator,
  getPetsActionCreator,
} from "../features/petsSlice";
import { listOfPets, testNewPet } from "../../mocks/mockPets";
import {
  createPetThunk,
  deletePetThunk,
  editPetThunk,
  getPetsThunk,
} from "./petsThunks";

describe("Given the getPetsThunk function", () => {
  describe("When it's called and receives a token", () => {
    test("Then it should call dispatch with action", async () => {
      const token = "testToken";
      const dispatch = jest.fn();
      const response = { status: 200, data: listOfPets };
      axios.get = jest.fn().mockResolvedValue(response);

      const expectedAction = getPetsActionCreator(listOfPets);

      const thunk = getPetsThunk(token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's called and there are a problem with data base", () => {
    test("Then it should don't call dispatch", async () => {
      const token = "testToken";
      const dispatch = jest.fn();
      const response = { status: 404, data: listOfPets };
      axios.get = jest.fn().mockResolvedValue(response);

      const thunk = getPetsThunk(token);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the deletePetThunk function", () => {
  describe("When it's called and receives a token and id of a pet", () => {
    test("Then it should call dispatch with deletePetActionCreator with the id", async () => {
      const token = "testToken";
      const id = "testId";
      const dispatch = jest.fn();
      const response = { status: 200 };
      axios.delete = jest.fn().mockResolvedValue(response);

      const expectedAction = deletePetActionCreator(id);

      const thunk = deletePetThunk(token, id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's called and there are a problem with data base", () => {
    test("Then it should don't call dispatch", async () => {
      const token = "testToken";
      const id = "testId";
      const dispatch = jest.fn();
      const response = { status: 404 };
      axios.delete = jest.fn().mockResolvedValue(response);

      const thunk = deletePetThunk(token, id);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the createPetThunk function", () => {
  describe("When it's called and receives a token and a newPet", () => {
    test("Then it should call dispatch with createPetActionCreator with the createdPet", async () => {
      const token = "testToken";
      const newPet = testNewPet;
      const dispatch = jest.fn();
      const createdPet = { ...newPet, id: "testiD" };
      const response = { status: 201, data: createdPet };
      axios.post = jest.fn().mockResolvedValue(response);

      const expectedAction = createPetActionCreator(createdPet);

      const thunk = createPetThunk(token, newPet);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's called and there are a problem with data base", () => {
    test("Then it should don't call dispatch", async () => {
      const token = "testToken";
      const newPet = testNewPet;
      const dispatch = jest.fn();
      const response = { status: 404 };
      axios.post = jest.fn().mockResolvedValue(response);

      const thunk = createPetThunk(token, newPet);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the editPetThunk function", () => {
  describe("When it's called and receives a token and a modifiedPet", () => {
    test("Then it should call dispatch with editedPetActionCreator with the modifiedPet", async () => {
      const token = "testToken";
      const modifiedPet = listOfPets[0];
      const dispatch = jest.fn();
      const response = { status: 204 };
      axios.put = jest.fn().mockResolvedValue(response);

      const expectedAction = editedPetActionCreator(modifiedPet);

      const thunk = editPetThunk(token, modifiedPet);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's called and there are a problem with data base", () => {
    test("Then it should don't call dispatch", async () => {
      const token = "testToken";
      const modifiedPet = listOfPets[0];
      const dispatch = jest.fn();
      const response = { status: 404 };
      axios.put = jest.fn().mockResolvedValue(response);

      const thunk = editPetThunk(token, modifiedPet);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
