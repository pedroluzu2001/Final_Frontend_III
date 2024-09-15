import React, { useEffect, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Context/GlobalContext";

const Home = () => {
  const { data, setData } = useContext(ContextGlobal);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [setData]);

  return (
    <div>
      <h1>Our Dentists</h1>
      <div className="grid">
        {data.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
