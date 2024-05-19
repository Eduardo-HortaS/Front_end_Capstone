const seedRandom = seed => {
  const modulus = 2**35 - 31;
  const multiplier = 185852;
  let s = seed % modulus;

  return () => (s = s * multiplier % modulus) / modulus;
};

const fetchAPI = date => {
  let result = [];
  let randomGenerator = seedRandom(date.getDate());

  for(let i = 17; i <= 22; i++) {
    if (randomGenerator() < 0.5){
      result.push(i + ':00');
    }
    if(randomGenerator() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

const submitAPI = formData => true;

export {
  fetchAPI,
  submitAPI
};