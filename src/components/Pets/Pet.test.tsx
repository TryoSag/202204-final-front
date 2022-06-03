import { render, screen } from "@testing-library/react";
import Pet from "./Pet";

describe("Given the Pet component", () => {
  describe("When it's called and receives 'testName', 'testPicture', 'male' and 'dog'", () => {
    test("Then it should render a image with alternative text 'dog named testName'", () => {
      render(
        <Pet name="testName" picture="testPicture" sex="male" animal="dog" />
      );

      expect(screen.getByAltText("dog named testName")).toBeInTheDocument();
    });

    test("Then it should render a element of list with the text 'testName'", () => {
      render(
        <Pet name="testName" picture="testPicture" sex="male" animal="dog" />
      );

      expect(screen.getByText("testName", { exact: true })).toBeInTheDocument();
    });

    test("Then it should render a image with alternative text 'male icon'", () => {
      render(
        <Pet name="testName" picture="testPicture" sex="male" animal="dog" />
      );

      expect(screen.getByAltText("male icon")).toBeInTheDocument();
    });
  });

  describe("When it's called and receives 'nameTest', 'pictureTest', 'female' and 'cat'", () => {
    test("Then it should render a image with alternative text 'cat named nameTest'", () => {
      render(
        <Pet name="nameTest" picture="pictureTest" sex="female" animal="cat" />
      );

      expect(screen.getByAltText("cat named nameTest")).toBeInTheDocument();
    });

    test("Then it should render a image with alternative text 'female icon'", () => {
      render(
        <Pet name="nameTest" picture="pictureTest" sex="female" animal="cat" />
      );

      expect(screen.getByAltText("female icon")).toBeInTheDocument();
    });
  });
});
