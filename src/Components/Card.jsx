import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFav = { name, username, id };
    
    if (!favs.some(fav => fav.id === id)) {
      favs.push(newFav);
      localStorage.setItem("favs", JSON.stringify(favs));
      alert(`${name} has been added to your favorites!`);
    } else {
      alert(`${name} is already in your favorites.`);
    }
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{username}</p>
      <Link to={`/dentist/${id}`}>View Details</Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
