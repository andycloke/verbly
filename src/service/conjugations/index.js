async function fetchConjugations(options = {}) {
  const result = await fetch(
    `${process.env.PUBLIC_URL}/data/conjugations.json`
  );
  const json = await result.json();
  return json;
}

export default {
  fetchConjugations
};
