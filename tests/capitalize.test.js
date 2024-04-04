const capitalize = require("../modules/capitalize");

test("return first string capitalized", () => {
  expect(capitalize("ivan")).toBe("Ivan")
})

test("if string is empty return it", () => {
  expect(capitalize("")).toBe("")
})

