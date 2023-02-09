
import './App.scss';
import './data/punk.js'
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <section>
        <NavBar/>
      </section>

      <section>
        <Main/>
      </section>
    </div>
  );
}

export default App;
