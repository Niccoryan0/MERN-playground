import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <Person name="Nicco" type="Random"/>
      <Person name="Jeff" type="Smelly"/>
      <Person name="John" type="Proud"/>

    </div>
  );
}

export default App;
