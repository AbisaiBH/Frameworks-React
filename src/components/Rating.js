import '../App.css'; // Asegúrate de tener el archivo CSS con los estilos

const Rating = ({ calificacion }) => (
  <div className="rating">
    {[1, 2, 3, 4, 5].map((value) => (
      <span
        key={value}
        className={`star ${value <= calificacion ? 'selected' : ''}`}
      ></span>
    ))}
  </div>
);

export default Rating;