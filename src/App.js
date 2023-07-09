
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Continent from './Components/Continent';
import Country from './Components/Country';
import Places from './Components/Places';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Continent/>}/>
      <Route path='/:continent/:continentId' element={<Country/>}/>
      <Route path='/:continent/:continentId/:country/:countryId' element={<Places/>}/>
      {/* <Route path='/:place/:id' element={</>}/> */}
    </Routes>
    </div>
  );
}

export default App;
