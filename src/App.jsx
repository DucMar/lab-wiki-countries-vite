import { Route, Routes, Link } from "react-router-dom";
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Link to="/countries">Countries</Link>
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/:countryId" component={CountryDetails}/>
        <Route path='/countries' element={<CountryList/>}/>
        <Route path='/countries/:alpha3Code' element={<CountryDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
