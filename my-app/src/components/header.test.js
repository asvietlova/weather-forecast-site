import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
  test("should contain class App-header", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(".App-header").exists()).toBe(true);
    expect(wrapper.find(".App-header").length).toBe(1);
  });
});
