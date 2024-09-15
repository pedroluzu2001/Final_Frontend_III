import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <div>
      <h2>Your Favorite Dentists</h2>
      <div className="fav-grid">
        {favs.length ? (
          favs.map((fav) => <Card key={fav.id} {...fav} />)
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
