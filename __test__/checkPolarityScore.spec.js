import { checkPolarityScore } from "../src/client/js/formHandler";

describe("checkPolarityScore", () => {
  it("this should return the correct polarity score for each input", () => {
    expect(checkPolarityScore("P+")).toBe("STRONG POSITIVE");
    expect(checkPolarityScore("P")).toBe("POSITIVE");
    expect(checkPolarityScore("NEU")).toBe("NEUTRAL");
    expect(checkPolarityScore("N")).toBe("NEGATIVE");
    expect(checkPolarityScore("N+")).toBe("STRONG NEGATIVE");
    expect(checkPolarityScore("NONE")).toBe("WITHOUT SENTIMENT");
    expect(checkPolarityScore("")).toBe("ERROR");
  });
});
