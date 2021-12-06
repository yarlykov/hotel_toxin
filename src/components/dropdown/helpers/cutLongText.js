const cutLongText = (str, numberOfLetters) => {
  const changedStr = str;
  if (str.length > numberOfLetters) {
    return `${str.slice(0, numberOfLetters + 1)}...`;
  }
  return changedStr;
};

export default cutLongText;
