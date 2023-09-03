import {BsFillCircleFill} from 'react-icons/bs'


const Card = ({name, species, gender, status, img}) => {

    let statusColor = ''

    if (status === "Alive") {
        statusColor = "alive"
    }
    else if (status === "Dead") {
        statusColor = "dead"
    }
    else {
        statusColor = "unknown"
    }

    return (
        <div className="main-card">
            <li>
                    <img className="img-card" src={img}></img>
                    <h3>{name}</h3>
                    <p>{species} - {gender}</p>
                    <BsFillCircleFill className={`status-circle-${statusColor}`}/>{status}
            </li>
        </div>
    )
}

export default Card;