import { checkUrl } from "../src/client/js/urlChecker";

describe("Testing the checkUrl functionality", () => {
  it("should return true for a valid URL", () => {
    const validUrl = "https://www.udacity.com";
    expect(checkUrl(validUrl)).toBe(true);
  });

  it("should return false for an invalid URL", () => {
    const invalidUrl = "123website";
    expect(checkUrl(invalidUrl)).toBe(false);
  });
});
