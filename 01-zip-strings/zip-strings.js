function zipStrings(strA, strB) {
  let result = "";
  for (let i = 0; i < strA.length; i++) {
    result += strA.slice(i, i + 1);
    result += strB.slice(i, i + 1);
  }
  result += strB.slice(strA.length);
  return result;
}
