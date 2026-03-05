import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


export default function Index() {
  const [results, setResult ] = useState<any[]>([]);
  useEffect(() => {
    console.log("Enntre en pantalla");
    getPokemon();
  }, []  );

  const getPokemon = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    setResult(data.results);
  };
  
  return (
    <View>
      <Text>{results[1]?.name}</Text>
      {results.map((pokemon) =>{
        return <Text key={pokemon.name}>{pokemon.name}</Text>
      })}
    </View>
  );
}
