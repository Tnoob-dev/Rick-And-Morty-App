import axios from "axios";

export function apiPageRequest(page, setFilteredCharacter) {
    
  const ApiURL = `https://rickandmortyapi.com/api/character/`

  axios
    .get(ApiURL + `?page=${page}`)
    .then(response => {
      setFilteredCharacter(response.data.results)
    })
}

export function apiSearchRequest(search, setFilteredCharacter) {
  const ApiURL = "https://rickandmortyapi.com/api/character/"
    axios
      .get(ApiURL + `?name=${search}`)
      .then(response => {
        setFilteredCharacter(response.data.results)
      })
}