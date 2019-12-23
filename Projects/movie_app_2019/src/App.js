import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Doncasu",
    image: "https://jesswitkins.files.wordpress.com/2012/04/100_2023.jpg",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/440px-Dolsot-bibimbap.jpg",
    rating: 4.0,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://mykoreankitchen.com/wp-content/uploads/2006/10/1.-Easy-Kimbap.jpg",
    rating: 3.4,
  },
];

function Food(props) {
  return (
    <div>
      <h2>I like {props.name}</h2>
      <h4>{props.rating} / 5.0</h4>
      <img src={props.picture} width="50%" alt={props.name} />
    </div>
  );
}

Food.defaultProps = {
  rating: 0,
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
