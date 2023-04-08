export default randArr = function (arr) {
  if (arr === void 0) {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  var output = [];
  while (arr.length !== output.length) {
    var anyIndex = Math.floor(Math.random() * arr.length);
    var arrEle = arr[anyIndex];
    if (output.includes(arrEle)) {
      continue;
    } else {
      output.push(arrEle);
    }
  }
  return output;
};
