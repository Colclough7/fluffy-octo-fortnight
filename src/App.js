import React from 'react'
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import Error from './components/Error'
import {useGlobalContext} from './context/Context'

function App() {
  const {state:{results},state:{selected},closePopup} = useGlobalContext()
  return (
   <div className="App">
     <header>
       <h1>Movie Database</h1>
     </header>
     <main>
       <Search />
       {(typeof results == 'undefined')?<Error />:<Results />}
       {(typeof selected.Title != 'undefined')&&<Popup selected={selected} closePopup={closePopup} />}
     </main>
   </div>
  );
}

export default App;
