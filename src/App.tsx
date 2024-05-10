import './App.css';
import data from "./data.json"
import Dropdown from './component/Dropdown';
import CollapsibleList from './component/CollapsibileList';
import { useState } from 'react';



function App() {
  const [persons, setPersons] = useState(data.results)
  
  const options:string[] = ['Male','Female','All']

  const handleSelect = (option: string) => {
    const newPerson = option === 'All' ? data.results : data.results.filter(person=> person.gender === option.toLocaleLowerCase())
    setPersons(newPerson)
  };


  let countries = new Set(data.results.map(person=>person.location.country))
  
  const newCountries:any[] = []

  /**
   * Modify the data structure so that it is categorized according to the country
   */
  countries.forEach((country)=>{
    const newCountry = {
      country: country,
      users: persons.filter(person=> person.location.country === country )
    }
    newCountries.push(newCountry) 
  })

  /**
   * Sort by user length
   */
  newCountries.sort((a,b)=> a.users.length - b.users.length)

  return (
    <div className="App">
      <div className="filter">
        <Dropdown options={options} onSelect={handleSelect} />
      </div>
      <div className="App-header">
        <CollapsibleList countries={newCountries}></CollapsibleList>

      
      </div>
    </div>
  );
}

export default App;
