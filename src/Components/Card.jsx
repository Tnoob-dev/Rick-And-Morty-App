const Card = ({name, species, gender, img}) => {
    return (
        <div className="main-card">
            <li>
                <div className="container">
                    <img className="img-card" src={img}></img>
                    <p>Name: <span>{name}</span></p>
                    <p>Species: <span>{species}</span></p>
                    <p>Gender: <span>{gender}</span></p>
                </div>
            </li>
        </div>
    )
}

export default Card;