import './App.css';
import {Testimonio1, Testimonio2, Testimonio3} from './componentes/Testimonio.js'
import Testimonio from './componentes/Testimonio.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen expertos en la programación</h1>
      </div>
      <Testimonio {...Testimonio1} />
      <Testimonio {...Testimonio2} />
      <Testimonio {...Testimonio3} />
    </div>
  );
}

export default App;
