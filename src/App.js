import './App.css';
import HelloWorld from './components/HelloWorld';


function App() {
  const name = "Matheus";
  const newName = name.toUpperCase();
  return (
    <div className='App'>
      <HelloWorld name="Matheus" />
      <p>Este é um parágrafo de {newName}</p>
    </div>
  );
}

export default App;
