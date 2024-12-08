/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function sumArrays(arr1, arr2) {
  return Array.from(
    { length: Math.max(arr1.length, arr2.length) },
    (_, index) => (arr1[index] || 0) + (arr2[index] || 0)
  );
}

function findElement(arr, value) {
  return arr.indexOf(value);
}

function findAllOccurrences(arr, item) {
  return arr.filter((element) => element === item).length;
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getStringsLength(arr) {
  return arr.map((str) => str.length);
}

function getAverage(arr) {
  return arr.length === 0
    ? 0
    : Number((arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2));
}

function isSameLength(arr) {
  return arr.length === 0
    ? true
    : arr.every((str) => str.length === arr[0].length);
}

function isValueEqualsIndex(arr) {
  return arr.some((value, index) => value === index);
}

function insertItem(arr, item, index) {
  return arr.splice(index, 0, item) && arr;
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return n > 0 ? arr.slice(-n) : [];
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function toStringList(arr) {
  return arr.join(',');
}

function distinct(arr) {
  return [...new Set(arr)];
}

function createNDimensionalArray(n, size) {
  if (n === 1) return new Array(size).fill(0);
  return new Array(size).fill().map(() => createNDimensionalArray(n - 1, size));
}

function flattenArray(nestedArray) {
  return nestedArray.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function calculateBalance(arr) {
  return arr.reduce(
    (total, [income, expense]) => total + (income - expense),
    0
  );
}

function createChunks(arr, chunkSize) {
  return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) =>
    arr.slice(i * chunkSize, (i + 1) * chunkSize)
  );
}

function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

function getElementByIndices(arr, indices) {
  return indices.reduce((currentArr, index) => currentArr[index], arr);
}

function getFalsyValuesCount(arr) {
  return arr.filter((item) => !item).length;
}

function getIdentityMatrix(n) {
  return Array.from({ length: n }, (_, rowIndex) =>
    Array.from({ length: n }, (__, colIndex) => (rowIndex === colIndex ? 1 : 0))
  );
}

function getIndicesOfOddNumbers(numbers) {
  return numbers.reduce(
    (acc, num, index) => (num % 2 !== 0 ? [...acc, index] : acc),
    []
  );
}

function getHexRGBValues(arr) {
  return arr.map(
    (num) => `#${num.toString(16).toUpperCase().padStart(6, '0')}`
  );
}

function getMaxItems(arr, n) {
  return arr.sort((a, b) => b - a).slice(0, n);
}

function findCommonElements(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

function findLongestIncreasingSubsequence(nums) {
  const lengths = nums.reduce((acc, num, i) => {
    const prevMax = nums
      .slice(0, i)
      .reduce(
        (max, prevNum, j) => (prevNum < num ? Math.max(max, acc[j] + 1) : max),
        1
      );
    return [...acc, prevMax];
  }, []);

  return lengths.length > 0 ? Math.max(...lengths) : 0;
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

function shiftArray(arr, n) {
  const len = arr.length;
  const absN = Math.abs(n) % len;
  return n >= 0
    ? [...arr.slice(-absN), ...arr.slice(0, -absN)]
    : [...arr.slice(absN), ...arr.slice(0, absN)];
}

function sortDigitNamesByNumericOrder(arr) {
  const digitOrder = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return arr.sort((a, b) => digitOrder.indexOf(a) - digitOrder.indexOf(b));
}

function swapHeadAndTail(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const head = arr.slice(0, mid);
  const tail = arr.slice(-mid);
  const midElement = arr.length % 2 === 1 ? [arr[mid]] : [];

  return [...tail, ...midElement, ...head];
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
