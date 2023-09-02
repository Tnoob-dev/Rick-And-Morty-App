const SearchBar = ({value, handle}) => {
    return (
        <div className="searchbar-div">
            <form>
                <input value={value} onChange={handle} className="searchbar" type="text" placeholder="Buscar personaje"></input>
            </form>
        </div>
    )
}

export default SearchBar;