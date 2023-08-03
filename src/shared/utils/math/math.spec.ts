import { add } from "./math";

describe("math", function () {
  describe("addition", function () {
    it("should add two numbers", function () {
      expect(add(1, 2)).toBe(3);
    });
  });
});
