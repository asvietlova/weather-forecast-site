import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Day from "./day";

Enzyme.configure({ adapter: new Adapter() });

describe("Day", () => {
  test("should contain class day", () => {
    const wrapper = shallow(<Day />);

    expect(wrapper.find(".day").exists()).toBe(true);
    expect(wrapper.find(".day").length).toBe(1);
  });

  test("should contain img", () => {
    const wrapper = shallow(<Day />);

    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").length).toBe(1);
  });
});
