const declensionsText = (num, wordArray) => {
  const num100 = num % 100;
  const num10 = num % 10;

  if (num100 > 10 && num100 < 20) { return wordArray[2]; }
  if (num10 > 1 && num10 < 5) { return wordArray[1]; }
  if (num10 === 1) { return wordArray[0]; }
  return wordArray[2];
};

export default declensionsText;
