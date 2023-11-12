import React, { useState } from 'react';

const Estrella = () => {
  const [calf, asignar] = useState(null);
  

  const handleStarClick = (posicion) => {
    asignar(posicion);
  };

  const over = (posicion) => {
    asignar(posicion);
  };

  const leave = () => {
    asignar();
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((posicion) => (
        <span
          key={posicion}
          className={`btnEstrella ${calf !== null ? 'on' : 'off'} ${posicion <= calf ? '' : 'off'} `}
          onClick={() => handleStarClick(posicion)}
          onMouseOver={() => over(posicion)}
          onMouseLeave={() => leave(posicion)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Estrella;