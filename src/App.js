
import './App.css';
import Range from './components/Range/Range';
import Header from './components/Header';
import Search from './sections/Search';
import Main from './sections/Main';
import ListPokemon from './components/ListPokemon';
import { useEffect } from 'react';
import Api from './api/api';
function App() {

//  const myApi=Api
//  myApi()
  return (
    <div className="App">
      <Range></Range>
      <Header></Header>
      
      <Main></Main>


    </div>
  );
}

export default App;
