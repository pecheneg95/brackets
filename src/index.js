module.exports = function check(str, bracketsConfig) {
  function deleteBrackets(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i] && str.includes(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`)) {
        str = str.replace(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`, "");
        return deleteBrackets(str, bracketsConfig);
      }
    }
    return str;
  }
  let res = deleteBrackets(str, bracketsConfig);
  return res === "";
};
