const addCommaInText = (text) => {
  const textCopy = text;
  const textWithComma = text.length ? `${textCopy}, ` : textCopy;
  return textWithComma;
};

export default addCommaInText;
