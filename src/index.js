
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let resultArr = [];
    if (matrix === undefined || matrix.length === 0) {
        return resultArr;
    }
    matrix.forEach((arr, index) => index % 2 === 0 ? resultArr.push(...arr) : resultArr.push(...arr.reverse()));
  return resultArr;
}
