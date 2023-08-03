import { add, subtract } from "./math";

describe("math", function () {
  describe("addition", function () {
    it("should add two numbers", function () {
      expect(add(1, 2)).toBe(3);
    });
  });

  describe("subtraction", function () {
    it("should subtract two numbers", function () {
      expect(subtract(1, 1)).toBe(0);
    });
  });
});
