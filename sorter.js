const strSorter = unsortedStr =>
  unsortedStr
    .split("")
    .sort()
    .reverse()
    .join("");
module.exports = {
  strSorter
};
