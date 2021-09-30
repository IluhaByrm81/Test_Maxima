export const getData = async (limit, offset) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error(err);
  }
};

export const getDataInfo = async (name) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
