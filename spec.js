var Reverser = function () {
  return {
    reverse: function reverse(text, acc) {
      acc = acc || "";
      return (text.length > 0) ? this.reverse(text.slice(1), text[0] + acc) : acc;
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

  it("should return empty string for number arguments", function () {
    expect(reverser.reverse(7)).to.equal("");
  });

  it("should throw TypeError for objects", function () {
    var obj = { length: 2 };

    expect(function () { reverser.reverse(obj); }).to.throwError("TypeError");
  });

  it("should work for arrays too", function () {
    expect(reverser.reverse([1, 2, 3])).to.equal("321");
  });
});
