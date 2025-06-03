function addCommas(num) {
  let numStr = num.toString();

  const isNegative = numStr[0] === "-";
  if (isNegative) {
    numStr = numStr.slice(1);
  }

  const [integerPart, decimalPart] = numStr.split(".");

  let formattedInteger = "";
  for (let i = 0; i < integerPart.length; i++) {
    if (i > 0 && (integerPart.length - i) % 3 === 0) {
      formattedInteger += ",";
    }
    formattedInteger += integerPart[i];
  }

  let result = isNegative ? "-" : "";
  result += formattedInteger;
  if (decimalPart) {
    result += "." + decimalPart;
  }

  return result;
}

module.exports = addCommas;
