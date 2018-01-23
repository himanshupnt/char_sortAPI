const strSorter = unsortedStr =>
  unsortedStr
    .split("")
    .sort()
    .join("");
module.exports = {
  strSorter
};
