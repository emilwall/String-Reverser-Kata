var Reverser = function () {
  return {
    reverse: function (arg) {
      return arg;
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
});
