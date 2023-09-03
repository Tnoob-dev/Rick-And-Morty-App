import axios from "axios";

export default function apiRequest(search, setFilteredCharacter) {
    
  const ApiURL = "https://rickandmortyapi.com/api/character/"

    axios
      .get(ApiURL + `?name=${search}`)
      .then(response => {
        setFilteredCharacter(response.data.results)
      })
}