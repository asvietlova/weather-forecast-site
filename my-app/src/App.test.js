// import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  test("should contain class App", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(".App").exists()).toBe(true);
    expect(wrapper.find(".App").length).toBe(1);
  });
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
