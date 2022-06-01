import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it's called", () => {
    test("Then it should render 1 image with the alternative text 'Pet's House logo'", () => {
      render(<Header pageName={"List of Pet's"} adminUser={false} />);

      expect(screen.getByAltText("Pet's House logo")).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a pageName 'List of Pet's' and adminUser true", () => {
    test("Then it should render 1 heading with the text 'List of Pet's'", () => {
      render(<Header pageName={"List of Pet's"} adminUser={true} />);

      expect(
        screen.getByRole("heading", { level: 1, name: "List of Pet's" })
      ).toBeInTheDocument();
    });

    test("Then it should render 1 button with the text 'Create'", () => {
      render(<Header pageName={"List of Pet's"} adminUser={true} />);

      expect(
        screen.getByRole("button", { name: "Create" })
      ).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a pageName 'More about' and adminUser true", () => {
    test("Then it should render 1 heading with the text 'More about'", () => {
      render(<Header pageName={"More about"} adminUser={true} />);

      expect(
        screen.getByRole("heading", { level: 1, name: "More about" })
      ).toBeInTheDocument();
    });

    test("Then it should render 2 buttons, one with the text 'Edit' and other with 'Delete'", () => {
      render(<Header pageName={"More about"} adminUser={true} />);

      expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Delete" })
      ).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a pageName 'List of Pet's' and adminUser false", () => {
    test("Then it should not render any button", () => {
      render(<Header pageName={"List of Pet's"} adminUser={false} />);

      expect(screen.queryByRole("button")).toBeNull();
    });
  });

  describe("When it's called and receives a pageName 'More about' and adminUser false", () => {
    test("Then it should not render any button", () => {
      render(<Header pageName={"More about"} adminUser={false} />);

      expect(screen.queryByRole("button")).toBeNull();
    });
  });
});
