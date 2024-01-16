import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks - 3);
    console.log("click")
  }
  const click1 = () => {
    setNumClicks(nroClicks + 3);
    console.log("click")
  }
  const click2 = () => {
    setNumClicks(nroClicks - 1);
    console.log("click")
  }
  const click3 = () => {
    setNumClicks(nroClicks + 1);
    console.log("click")
  }
  const reiniciar = () => {
    setNumClicks(0);
    console.log("reiniciar")
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={click} />
          <Boton texto="+3" esBotonClick={false}
            funcionClick={click1} />
          <Boton texto="-1" esBotonClick={false}
            funcionClick={click2} />
          <Boton texto="+1" esBotonClick={false}
            funcionClick={click3} />
        </div>
        <div className="caja2">
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;


