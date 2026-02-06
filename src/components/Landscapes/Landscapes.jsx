import './Landscapes.css'

export default function Landscapes(props) {
  console.log(props)
  return (
    <section>
      <div className="landscapeContainer">
        <div className="imgDiv">
          <img
            className="imgProp"
            src={props.item.img.src}
            alt={props.item.img.alt}
          />
        </div>
        <div className="contentDiv">
          <a>📍</a> <a>{props.item.country}</a>
          <a className="pGoogle" href={props.item.googleMapsLink}>
            View on Google Maps
          </a>
          <h2 style={{ color: 'black' }}>{props.item.title}</h2>
          <p className="date">
            <b>{props.item.dates}</b>
          </p>
          <p>{props.item.text}</p>
        </div>
      </div>
    </section>
  )
}
