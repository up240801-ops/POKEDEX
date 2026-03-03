import { use, useEffect } from "react";
import { Text, View } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


export default function Index() {
  useEffect(() => {
    console.log("Enntre en pantalla");
    getPokemon();
  }, []  );

  const getPokemon = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL);
    const data = await response.json();
    console.log("Response: ", response);
  };
  
  return (
    <View>
      <Text>Erick</Text>
    </View>
  );
}
