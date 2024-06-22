const getLongestName = (arr) => {
  let longest = arr.reduce(
    function (a, b) {
      return a.length > b.length ? a : b;
    }
  );
  return longest;
};

module.exports = getLongestName;