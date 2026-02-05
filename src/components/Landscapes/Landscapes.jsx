import './Landscapes.css'

export default function Landscapes(props) {
  return (
    <section>
      <div className="landscapeContainer">
        <div className="imgDiv">
          <img className="imgProp" src={props.img} alt={props.title} />
        </div>
        <div className="contentDiv">
          <a>📍</a> <a>{props.location}</a>
          <a className="pGoogle" href={props.mapLink}>
            View on Google Maps
          </a>
          <h2 style={{ color: 'black' }}>{props.title}</h2>
          <p className="date">
            <b>{props.date}</b>
          </p>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  )
}
