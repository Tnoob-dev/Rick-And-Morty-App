import {BsFillCircleFill} from 'react-icons/bs'


const Card = ({name, species, lastLocation, status, img}) => {

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
        <li>
            <article className='card'>
                <div className="img-div">
                    <img className='img-card' src={img}></img>
                </div>
                <div className='item'>
                    <h2>{name}</h2>
                    <p><BsFillCircleFill className={`status-circle-${statusColor}`} />{status} - {species}</p>
                    <span>Last known location:</span>
                    <p>{lastLocation}</p>
                </div>
            </article>
        </li>
    )
}

export default Card;