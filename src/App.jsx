import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Nav from './MainComponents/Nav'
import getData from './JS/service'
import Header from './MainComponents/Header'
import AllCountry from './MainComponents/AllCountry'
import Regions from './MainComponents/Regions'
import Details from './MainComponents/ChildComponent/Details'

function App() {

  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [text, setText] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let data = await getData()
        setCountries(data)
      }
      catch (error) {
        console.error("API-da xeta var: " + error)
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    let regionlar = [...new Set(countries.map((reg) => reg.region))]
    setRegions(regionlar)
  }, [countries])

  let searchCountry = (e)=>{
      setText(e.target.value)
      console.log(text)
  }

  useEffect(()=>{
    if(text){
      let filtered = countries.filter(country => country.name.toLowerCase().includes(text.toLowerCase()))
      setFilteredCountry(filtered)
    }
    else setFilteredCountry(countries)
  })

  return (
    <>
      <Nav regions={regions} />
      <Routes>
        <Route path={"/"} element={
          <>
            <Header countries={countries} text={text} searchCountry={searchCountry} />
            <AllCountry countries={filteredCountry} />
          </>
        } />
        <Route path='/region/:regionName' element={<Regions countries={countries}/>}/>
        <Route path='/details/:alphaCode' element={<Details countries={countries}/>}/>
      </Routes>
    </>
  )
}

export default App
