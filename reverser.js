var reverse = function reverse(text, acc) {
  acc = (typeof acc !== "undefined") ? acc : "";
  return (text.length > 0) ? reverse(text.slice(1), text[0] + acc) : acc;
};

module.exports.reverse = reverse;
