
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Continent from './Components/Continent';
import Country from './Components/Country';
import Places from './Components/Places';
import PlaceDetail from './Components/PlaceDetail';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Continent/>}/>
      <Route path='/:continent/:continentId' element={<Country/>}/>
      <Route path='/:continent/:continentId/:country/:countryId' element={<Places/>}/>
      <Route path='details/:place/:placeId' element={<PlaceDetail/>}/>
    </Routes>
    </div>
  );
}

export default App;
