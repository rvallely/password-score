const getScore = (password) => {
  let score = 0;
  if (password.length >= 1 && password.length <= 8) {
    if (password.length <= 3) {
      score += 1;
    } else {
      score += 2;
    }
    return score;
  }
  if (password.length >= 9 && password.length <= 12 ) {
    score += 2;
  }
  if (password.length >= 13) {
    score += 4;
  }

  const letters = /[a-zA-Z]/;
  const numbers = /[0-9]/;
  const special = /[!@£#$%^&*]/;

  if (letters.test(password) === true) {
    score += 1;
  }
  if (numbers.test(password) === true) {
    score += 1;
  }
  if (special.test(password) === true) {
    score += 1;
  }
  return score;
};

module.exports = { getScore };
