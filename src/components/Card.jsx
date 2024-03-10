import PropTypes from 'prop-types';

const Card = ({item}) => {
  return (
    <div
    style={{
      borderRadius: "12px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      border: "1px solid #b3b3b3",
      width: "350px",
      height: "150px",
      backgroundColor: "#303030",
      padding: "10px",
    }}>
    <img
      src={item.image}
      alt=""
      width={150}
      height={150}
      style={{ borderRadius: "12px" }}
    />
    <div>
      <h3>{item.name}</h3>
      <strong>{item.species}</strong>
      <p>{item.origin.name}</p>
    </div>
  </div>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.any.isRequired,
    name: PropTypes.any.isRequired,
    species: PropTypes.any.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.any.isRequired
    }).isRequired
  }).isRequired
};

export default Card