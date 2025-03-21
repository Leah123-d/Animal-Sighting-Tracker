import { useState, useEffect } from 'react'

function Homepage() {
  const [speciesJoin, setSpeciesJoin] = useState([]);
  const [sightingsJoin, setSightingsJoin] = useState([]);

  const fetchSpeciesJoin = async () => { 
    try {
      const res = await fetch("/species/2");
      if(!res.ok) throw new Error("Failed to fetch sightings");
      const data = await res.json();
      console.log("Fetched species join: ", data)
      return setSpeciesJoin([data]);
    } catch(error) {
      console.error(error);
      //setErrorHandle(true); //would want to build out sending this to an error component 
      return [];
    }
  };

  const fetchSightingsJoin = async () => { 
    try {
      const res = await fetch("/sightings/4");
      if(!res.ok) throw new Error("Failed to fetch sightings");
      const data = await res.json();
      console.log("Fetched sightings: ", data)
      return setSightingsJoin([data]);
    } catch(error) {
      console.error("Error fetching sightings: ", error);
      //setErrorHandle(true); //would want to build out sending this to an error component 
      return [];
    }
  };

  useEffect(() => {
    fetchSpeciesJoin();
    fetchSightingsJoin();
  }, []);

  return(
    <div className="cardContainer">
       <h1>Displaying Join Species and Individuals Table! </h1>
      <div className="content-1">
       
        {speciesJoin && speciesJoin.length > 0 ? (speciesJoin.map((element, index) => (
        <div key={index}>
        <p>Season Active: {element.indiv_active}</p>
        <p>Species Name: {element.species_name}</p>
        <p>Nickname: {element.indiv_nickname}</p>
        </div>
        ))
        ): (
        <p>no species data available</p>
        )}
      </div>
      <h1>Displaying Join Sightings and Individuals Table! </h1>
      <div className="content-2">
      {sightingsJoin && sightingsJoin.length > 0 ? (sightingsJoin.map((element, index) => (
      <div key={index}>
      <p>Created_at: {element.created_at}</p>
      <p>Health: {element.health ? "Healthy Animal!" : "Not healthy"}</p>
      <p>Nickname: {element.indiv_nickname}</p>
      <p>Location: {element.location_of_sighting}</p>
      <p>Season: {element.season_spotted}</p>
      <p>Sighter Contact: {element.sighter_contact}</p>
      <p>Id: {element.sightings_id}</p>
      <p>Date Sighted: {element.dated_sighted}</p>
      <p>Individual Seen: {element.individual_seen}</p>

      </div>
      ))
      ): (
      <p>no species data available</p>
      )}
        
      </div>

    </div>

  )

}

export default Homepage;

  

