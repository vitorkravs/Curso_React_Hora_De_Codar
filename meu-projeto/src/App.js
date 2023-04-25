import logo from './logo.svg';
import './App.css';

import List from './components/List';
import Form from './components/Form';

function App() {

  const name = 'vitor Kravszenko'
  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Meu nome é {name}</p>
      <List/>
      <Form/>
    </div>
  );
}

export default App;
