import '../App.css';

export const Color = () => {
    const ColorFondo = (color) => {
      document.documentElement.style.setProperty('--fondo-principal', color);
    };
  
    return (
      <div className="color">
        <button onClick={() => ColorFondo('#5CB9FE')}>Opción 1</button>
        <button onClick={() => ColorFondo('#363B81')}>Opción 2</button>
        <button onClick={() => ColorFondo('#FF1F1F')}>Opción 3</button>
        <button onClick={() => ColorFondo('#FBD743')}>Opción 4</button>
      </div>
    );
  };
  
  
  
  
  
  