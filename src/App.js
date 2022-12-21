import './App.css';
import Header from './components/Header/Header';
import Add from './components/add/Add';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import WatchList from './components/watchlist/watchList';
import Watched from './components/watched/watched';
import ContextProvider from './components/context/context';
function App() {

  return (
    <BrowserRouter>
<ContextProvider>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<WatchList/>}/>
      <Route path="/watched" element={<Watched/>}/>

     <Route path="/add" element={<Add/>}/>
     
   </Routes>
     

     </div>
     </ContextProvider>
     </BrowserRouter>

  );
}

export default App;
