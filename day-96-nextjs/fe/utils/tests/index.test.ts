import {
  cutTextToLength,
  slugify,
  composeArticleSlug,
  extractArticleIdFromSlug,
} from "..";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

describe("slugify", () => {
  it("slugy", () => {
    expect(slugify("Tsogtoo    ")).toBe("tsogtoo-");
  });
});

describe("composeArticleSlug", () => {
  it("ArticleSlug", () => {
    expect(composeArticleSlug(4, "Tsogtoo")).toBe("tsogtoo-4");
  });
});

describe("extractArticleIdFromSlug", () => {
  it("ArticleIdFromSlug", () => {
    expect(extractArticleIdFromSlug("Hello-World")).toBe("World");
  });

  console.log("Hello-World".split("-"));
  it("array expected", () => {
    expect("Hello-World".split("-")).toStrictEqual(["Hello", "World"]);
  });
});
// hello world .split(" ")-> ["hello", "world"]
