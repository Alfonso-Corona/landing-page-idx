const getPokemonInfo = async (pokemon) => {
  let pokemonInfo = pokemon.url ? pokemon.url.replace('pokemon', 'pokemon-species') : `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
  let pokemonNumber = typeof parseInt(pokemon) == 'number';
  const res = await fetch(pokemonInfo);
  if(!res.ok){
    throw new Error('can not get pokemon info')
  }

  return res.json()
    .then((data) => {
      let flavor = data.flavor_text_entries.filter((pokemonData)=> pokemonData.language.name === 'es');
      let entry = pokemonNumber ? flavor[flavor.length - 1] : flavor[0]; 
      entry.name = data.name.toUpperCase();
      return entry;
    });
}

export default getPokemonInfo;