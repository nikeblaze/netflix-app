// write an automated tests
// Tool
// 1. Test runner - e.g. Jest
// need to render the login button

import { fireEvent, render, screen } from "@testing-library/react";
import LoginBtn from "./LoginBtn";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// configure({ adapter: new Adapter() });

describe("LoginBtn", () => {
  // create a test specification
  it("Should render the LOGIN label within the button", () => {
    render(<LoginBtn />);
    const loginButton = screen.getByText("Login"); // searching for HTML
    expect(loginButton).toBeDefined();
  });

  //mock a function, shld trigger the event handler

  it("should trigger login props when clicked", () => {
    const mockedLogin = jest.fn();
    render(<LoginBtn login={mockedLogin} />);

    const loginButton = screen.getByText("Login");
    expect(loginButton).not.toBeCalled();

    fireEvent.click(loginButton);
    expect(mockedLogin).toBeCalled();
  });
});
