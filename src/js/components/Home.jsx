import React, { useEffect, useState } from "react";
import "./Index.css";


//create your first component
const Home = () => {
	const [activeColor, setActiveColor] = useState(null);

  const handleClick = (color) => {
    setActiveColor(color);
  };

  return (
    <div className="container">
      <div className="poste"></div>
      <div className="semaforo">
        <div
          className={`light red ${activeColor === 'red' ? 'active' : ''}`}
          onClick={() => handleClick('red')}
        ></div>
        <div
          className={`light yellow ${activeColor === 'yellow' ? 'active' : ''}`}
          onClick={() => handleClick('yellow')}
        ></div>
        <div
          className={`light green ${activeColor === 'green' ? 'active' : ''}`}
          onClick={() => handleClick('green')}
        ></div>
      </div>
    </div>
  );
};

export default Home;