const main = require("../src/main.js");

test("checkinf if the count are increasing 1 by 1", () => {
  expect(main.count).toBe(1);
});
