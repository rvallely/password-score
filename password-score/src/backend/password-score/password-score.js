const getScore = (password) => {
  let score = 
  {
    total: 0, 
    len: 0, 
    let: 0, 
    num: 0, 
    spec: 0,
    cap: 0
  }
  if (password.length === 0) {
    return score;
  }
  if (password.length >= 1 && password.length <= 8) {
    if (password.length < 4) {
      score.len += 1;
    } else {
      score.len += 2;
    }
    score.total += score.len;
    return score;
  }

  if (password.length >= 9 && password.length <= 12 ) {
    score.len += 2
  }
  if (password.length >= 13) {
    score.len += 3;
  }
  score.total += score.len;

  const numbers = /[0-9]/;
  const specials = /[!@£#$%^&*]/;
  const letters = /[A-Za-z]/;
  const capitals = /[A-Z]/;

  const countUp = password.split('').reduce((count, char) => {
    if (numbers.test(char)) {
      count.num += 1;
    }
    if (specials.test(char)) {
      count.spec += 1;
    }
    if (letters.test(char)) {
      count.let += 1;
    }
    if (capitals.test(char)) {
      count.cap += 1;
    }
    return count;
  }, { num: 0, spec: 0, let: 0, cap: 0 });

  if (countUp.num === 1) {
    score.num += 1;
  }
  if (countUp.num === 2 || countUp.num === 3) {
    score.num += 2;
  }
  if (countUp.num > 3) {
    score.num += 3;
  }
  score.total += score.num;

  if (countUp.spec === 1) {
    score.spec += 1;
  }
  if (countUp.spec === 2 || countUp.spec === 3) {
    score.spec += 2;
  }
  if (countUp.spec > 3) {
    score.spec += 3;
  }
  score.total += score.spec;

  const letPercent = ( countUp.let / password.length ) * 100;
  if (letPercent > 85) {
    score.let += 1
  }
  else if (letPercent > 60 && letPercent <= 85) {
    score.let += 2;
  }
  else if (letPercent <= 60) {
    score.let += 3;
  }
  score.total += score.let;

  if (countUp.cap === 1 || countUp.cap === 2) {
    score.cap += 1;
  }
  if (countUp.cap === 3 || countUp.cap === 4) {
    score.cap += 2;
  }
  if (countUp.cap > 4) {
    score.cap += 3;
  }
  score.total += score.cap;
  return score;
};

module.exports = { getScore };
