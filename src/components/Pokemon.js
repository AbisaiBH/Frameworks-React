import Estrella from './Estrella.js';

function Pokemon({numero, imgUrl, nombre, tipo,}){
    return(
        <div className="pokemon">
            <p className="numero">{numero}</p>
            <img src={"pokemon-img/"+imgUrl} alt=""/>
            <p className="nombre">{nombre}</p>
            <p className="tipo">{tipo}</p>
            <Estrella/>
        </div>
    );
}

export default Pokemon;