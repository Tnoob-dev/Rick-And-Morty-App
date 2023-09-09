import Card from "./Components/Card";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import { useEffect, useState } from "react";
import {apiPageRequest, apiSearchRequest} from "./logic/fetchApi";
import { Pagination } from "@mantine/core";

const App = () => {
  const [search, setSearch] = useState("")
  const [filteredCharacter, setFilteredCharacter] = useState([])
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    apiPageRequest( page, setFilteredCharacter)
  }, [page])

  useEffect(() => {
    apiSearchRequest(search, setFilteredCharacter)
  }, [search])

  const handleChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setSearch(event.target.value)
  }
  
  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  return (
    <div>
      <Header/>
      <SearchBar value={search} handle={handleChange}/>
      <ul className="main-card">
        {filteredCharacter.map(character => (
          <Card key={character.id} 
                name={character.name}
                lastLocation={character.location.name}
                species={character.species}
                status={character.status} 
                img={character.image}/>
        ))}
      </ul>
      <Pagination 
              className="pag" 
              total="42"
              color="violet"
              radius="xl"
              size="lg"
              withEdges
              onChange={handlePageChange}/>
    </div>
  )
}

export default App;