import './App.scss';
import { useState } from 'react'
import punk from './data/punk';
import CardContainer from './components/CardContainer/CardContainer';
import Nav from './components/Nav/Nav';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [beers, setBeers] = useState(punk)
   
  
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
        console.log(searchInput)
        const filteredBeers = punk.filter(beer => {
            if(beer.name.toLowerCase().includes(searchInput)){
                return true;
            } else {
                return false
            }
        })
       setBeers(filteredBeers)
    };

  return (
    
    <div className="App">
      <section>
        <Nav handleSearch={handleSearch}/>
      </section>

      <section>
        <CardContainer punk = {beers}/>
      </section>
    </div>
  );
}

export default App;
