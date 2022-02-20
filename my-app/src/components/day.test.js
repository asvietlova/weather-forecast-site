import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Day from "./day";

Enzyme.configure({ adapter: new Adapter() });

describe("Day", () => {
  let wrapper;

  beforeEach(() => {
    let dayInfo = {
      id: 7,
      date: "27/02/2022",
      temperatureMin: "-2",
      temperatureMax: "+3",
      atmPressure: "750",
      humidity: "62",
      wind: "2.0",
      description: "снег",
      img_url: "./img/snow.png",
    };

    wrapper = shallow(<Day {...dayInfo} />);
  });

  test("should contain class day", () => {
    expect(wrapper.find(".day").exists()).toBe(true);
    expect(wrapper.find(".day").length).toBe(1);
  });

  test("should contain img", () => {
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").length).toBe(1);
  });

  test("should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
