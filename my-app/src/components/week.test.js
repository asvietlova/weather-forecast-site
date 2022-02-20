import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WEATHER_FOR_WEEK from "../config";
import WeekWeather from "./week";

Enzyme.configure({ adapter: new Adapter() });

describe("WeekWeather", () => {
  let wrapper;
  let daysInfo = [
    {
      id: 7,
      date: "27/02/2022",
      temperatureMin: "-2",
      temperatureMax: "+3",
      atmPressure: "750",
      humidity: "62",
      wind: "2.0",
      description: "снег",
      img_url: "./img/snow.png",
    },
    {
      id: 7,
      date: "27/02/2022",
      temperatureMin: "-2",
      temperatureMax: "+3",
      atmPressure: "750",
      humidity: "62",
      wind: "2.0",
      description: "снег",
      img_url: "./img/snow.png",
    },
  ];

  let props = {
    listOfWeatherPerDay: daysInfo,
  };

  beforeEach(() => {
    wrapper = shallow(<WeekWeather {...props} />);
  });

  test("should render all days", () => {
    expect(wrapper.find(".day").exists()).toBe(true);
    expect(wrapper.find(".day").length).toBe(daysInfo.length);
  });
});
