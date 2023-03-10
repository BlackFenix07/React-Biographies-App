import Personaje from "./components/Personaje.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Personajes de Naruto</h1>
        <Personaje
          imagen="naruto-y-kurama"
          nombre="Naruto y Kurama"
          cargo="Shinobis"
          aldea="Hoja"
          biografia="Naruto es un ninja de Konoha, quien al principio, los aldeanos de Konoha odiaban debido a que este tiene sellado en su interior al Zorro de Nueve Colas llamado por su nombre verdadero Kurama, una bestia que había atacado a la aldea anteriormente." />
        <Personaje
          imagen="sasuke"
          nombre="Sasuke Uchiha"
          cargo="Shinobi"
          aldea="Hoja"
          biografia="Sasuke es un miembro del clan Uchiha, uno de los clanes ninja más fuertes de la Aldea Oculta de la Hoja. Su principal motivación a lo largo de la serie es vengar la destrucción de su clan por parte de su hermano mayor, Itachi Uchiha." />
        <Personaje
          imagen="shikamaru"
          nombre="Shikamaru Nara"
          cargo="Shinobi"
          aldea="Hoja"
          biografia="Shikamaru es un genio apático y despreocupado que fue promovido al nivel Chunin menos de un año después de la graduación. Pertenece a un clan de manipuladores de sombras y de pastores de ciervos, y a pesar de que piensa que las mujeres son problemáticas y no las soporta, tiene pensado casarse, tener dos hijos, y morir antes que su esposa para no sufrir." />
      </div>
    </div>
  );
}

export default App;