import React from 'react';
import './App.css';
import Tablero from './componentes/Tablero';
import TableroB from './componentes/TableroB';
import TableroC from './componentes/TableroC';
import Juego from './componente s/Juego';

function App() {



  return (
    <div className="App">

      {/* <Tablero />
      <TableroB />
      <TableroC /> */}
      <Juego />
    </div>
  );
}

export default App;