import Card from "./Components/Card";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import { useEffect, useState } from "react";
import apiRequest from "./logic/fetchApi";

const App = () => {
  const [search, setSearch] = useState("")
  const [filteredCharacter, setFilteredCharacter] = useState([])
  
  useEffect(() => {
    apiRequest(search, setFilteredCharacter)
  }, [search])

  const handleChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }
  
  return (
    <div>
      <Header/>
      <SearchBar value={search} handle={handleChange}/>
      <ul>
        {filteredCharacter.map(character => (
          <Card key={character.id} 
                name={character.name} 
                gender={character.gender} 
                species={character.species}
                status={character.status} 
                img={character.image}/>
        ))}
      </ul>
    </div>
  )
}

export default App;