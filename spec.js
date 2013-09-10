var Reverser = function () {
  return {
    reverse: function reverse(text, acc) {
      acc = acc || "";
      if (text.length > 0) {
        return this.reverse(text.substring(1), text[0]+acc);
      } else {
        return acc;
      }
    }
  };
};

var expect = require("expect.js");

describe("string-reverse", function () {
  var reverser = new Reverser();

  it("should return an empty string when passed an empty string", function () {
    expect(reverser.reverse("")).to.equal("");
  });

  it("should return its argument when passed a single character string", function () {
    expect(reverser.reverse("a")).to.equal("a");
  });

  it("should be able to reverse strings of length 2", function () {
    expect(reverser.reverse("ab")).to.equal("ba");
  });

  it("should be able to reverse long strings", function () {
    expect(reverser.reverse("testkatas")).to.equal("sataktset");
  });

  it("should return empty string for incompatible types", function () {
    expect(reverser.reverse(7)).to.equal("");
  });
});
