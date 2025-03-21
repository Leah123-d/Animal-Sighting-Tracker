import './App.css'
import { useState, useEffect } from 'react'
import Homepage from './components/Homepage'
import NavBar from './components/NavBar'
import DatabaseDisplay from './components/DatabaseDisplay'
import AddSightingForm from './components/AddSightingForm'
import AddNewSpecies from './components/AddNewSpecies'
// import AddIndividualForm from './components/AddIndividualForm'
function App() {
  const [species, setSpecies] = useState([]);
  const [individuals,setIndividuals] = useState([]);
  const [sightings, setSightings] = useState([]);
  const [openForm1, setOpenForm1] = useState(false);
  const [openForm2, setOpenForm2] = useState(false);

  const handleClickForm1 = (e) => {
    e.preventDefault();
    console.log("handleClick in console");
    setOpenForm1((prev) => !prev); //will display form
  }
  const handleClickForm2 = (e) => {
    e.preventDefault();
    console.log("handleClick in console");    
    setOpenForm2((prev) => !prev); //will display form
  }

  const fetchSpecies = async () => { 
    try {
      const res = await fetch("/species");
      if(!res.ok) throw new Error("Failed to fetch species");
      const data = await res.json();
      console.log("Fetched species: ", data)
      return setSpecies(data);
    } catch(error) {
      console.error("Error fetching species: ", error);
      //setErrorHandle(true); //would want to build out sending this to an error component 
      return [];
    }
  };

  const fetchIndividuals = async () => { 
    try {
      const res = await fetch("/individuals");
      if(!res.ok) throw new Error("Failed to fetch individuals");
      const data = await res.json();
      console.log("Fetched individuals: ", data)
      return setIndividuals(data);
    } catch(error) {
      console.error("Error fetching individuals: ", error);
      //setErrorHandle(true); //would want to build out sending this to an error component 
      return [];
    }
  };

  const fetchSightings = async () => { 
    try {
      const res = await fetch("/sightings");
      if(!res.ok) throw new Error("Failed to fetch sightings");
      const data = await res.json();
      console.log("Fetched all sightings: ", data)
      return setSightings(data);
    } catch(error) {
      console.error("Error fetching sightings: ", error);
      //setErrorHandle(true); //would want to build out sending this to an error component 
      return [];
    }
  };

  

  useEffect(() => {
    fetchSpecies();
    fetchIndividuals();
    fetchSightings();
  }, []);
  

  return (
    <div className = "component-container">
      < NavBar 
        handleClickForm1={handleClickForm1}
        handleClickForm2={handleClickForm2}/>

        {openForm1 &&
      < AddNewSpecies 
        species={species}
        handleClickForm1={handleClickForm1}
        openForm1={openForm1}/>}

      {openForm2 &&
      < AddSightingForm 
        sightings={sightings}
        handleClickForm1={handleClickForm2}
        openForm2={openForm2}/>}
        
       <Homepage />

      {/* <h1>Species Data from Database</h1>
      {species && <pre>{JSON.stringify(species, null, 2)}</pre>}
      <h1>Individuals data from database</h1>
      {individuals && <pre>{JSON.stringify(individuals, null, 2)}</pre>}
      <h1>Sightings data from database</h1>
      {sightings && <pre>{JSON.stringify(sightings, null, 2)}</pre>} */}
   
    <DatabaseDisplay
      species={species}
      individuals={individuals}
      sightings={sightings}
       />
    {/* <AddSightingForm /> */}

    </div>
    
  )
}

export default App
