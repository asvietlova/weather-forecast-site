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

  test("should match snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
