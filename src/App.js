import { useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import UserDigit from './components/UserDIgit';


function App() {
  let [texto, setTexto] = useState("");
  const captarDado = (texto) => {
    setTexto(texto);
  }
  return (
    <div className='App'>
      <UserDigit onEnviarDados={captarDado}/>
      <HelloWorld name={texto} />
      <p>Este é um parágrafo de {texto}</p>
    </div>
  );
}

export default App;
