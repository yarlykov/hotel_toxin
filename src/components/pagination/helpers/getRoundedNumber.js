const getDenominator = (initialNumber) => {
  const changedNumber = 1;
  if (initialNumber > 10 && initialNumber < 100) return changedNumber * 10;
  if (initialNumber > 100) return changedNumber * 100;
  return changedNumber;
};

const getRoundedNumber = (amount) => {
  const denominator = getDenominator(amount);
  return Math.trunc(amount / denominator) * denominator;
};

export default getRoundedNumber;
