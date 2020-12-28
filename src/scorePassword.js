//Credits https://stackoverflow.com/a/11268104
 const scorePassword = (pass)  => {
  let score = 0;
  if (!pass)
    return score;

  // award every unique letter until 5 repetitions
  let maxScore = 0;
  let letters = {};
  for (let i=0; i < pass.length; i++) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    score += 5.0 / letters[pass[i]];
    maxScore += 5.0;
  }

  // points for mixing it up
  let variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass),
  }

  let variationCount = 0;
  for (const check in variations) {
    variationCount += variations[check] ? 1 : 0;
  }
  score += variationCount * 10;
  score *= variationCount / 4;
  maxScore += 40;
  score = Math.trunc((score * 100 / maxScore) / 20);
  return score;
};

export default scorePassword;
