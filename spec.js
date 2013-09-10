var expect = require("expect.js");
var reverse = require("./reverser").reverse;

describe("string-reverse", function () {
  it("should return an empty string when passed an empty string", function () {
    expect(reverse("")).to.equal("");
  });

  it("should return its argument when passed a single character string", function () {
    expect(reverse("a")).to.equal("a");
  });

  it("should be able to reverse strings of length 2", function () {
    expect(reverse("ab")).to.equal("ba");
  });

  it("should be able to reverse long strings", function () {
    expect(reverse("testkatas")).to.equal("sataktset");
  });

  it("should return empty string for number arguments", function () {
    expect(reverse(7)).to.equal("");
  });

  it("should throw TypeError for objects", function () {
    var obj = { length: 2 };

    expect(function () { reverse(obj); }).to.throwError("TypeError");
  });

  it("should work for arrays too", function () {
    expect(reverse([1, 2, 3])).to.equal("321");
  });

  it("should append accumulator (coerced to string) to result", function () {
    expect(reverse("abc", "123")).to.equal("cba123");
  });
});
