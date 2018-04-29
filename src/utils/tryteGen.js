const seedRandom = require('seed-random')
const prefix = "Lqd6mCzMxROgJ8UW"

export default (seed, length = 81) => {
  seed = prefix + seed
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ9";
  var result = [];
  var rnd = seedRandom(seed);

  for(var i = 0; i < length; i++) {
    var num = Math.round(rnd() * charset.length)
    result.push(charset[num % charset.length])
  }

  return result.join("")
};