module.exports = function check(str, bracketsConfig) {
  let arr = [];
  if (str.length % 2 !== 0) {
    return false
  }
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < bracketsConfig.length; j++) {
      let conf = arr[arr.length - 1];

      if (str[i] == bracketsConfig[j][1] && arr.length != 0 && conf == bracketsConfig[j][0]) {
        arr.pop();
      } else if (str[i] == bracketsConfig[j][0]) {
        arr.push(str[i]);
      }
    }
  }
  if (arr.length == 0) { 
		return true;
	}
  if (arr.length != 0) {
	 return false;
	}
}
