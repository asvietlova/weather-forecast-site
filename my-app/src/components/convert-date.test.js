import convertDate from "./convert-date";

test("convertDate successful", () => {
  expect(convertDate("12/02/2022")).toBe("суббота, 12 февраля 2022 г.");
});

test("convertDate unsuccessful", () => {
  expect(convertDate("12.02.2022")).toBe("Invalid Date");
});
