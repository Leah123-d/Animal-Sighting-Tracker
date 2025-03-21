import { useState } from 'react'

function AddSightingForm({ openForm2, sightings }){
  const [newSighting, setNewSightings] = useState(
    {
      date_sighted: "",
      individual_seen:"",
      location_of_sighting:"",
      health:0,
      conservation_status_code:"",
      sighter_contact:"",
      season_spotted:"",
    }
  )

  const createSighting = async (e) => {
    e.preventDefault();
    console.log("New sighting submitted:", newSighting);

    try{
    const response = await fetch("/sightings", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSighting),
    });
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    } 
    const data = await response.json();
    console.log("fetched data:", data);

    setNewSightings(data); //storing the database response

    // if(data.response_code != 0){
    //   console.log("no results found");
      // setErrorHandle(true); //will come back to setting this error handling depending on response from the backend
    //}
    } catch(error){
      console.error("error fetching data: ", error);
    } 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSightings(prevSpecies => ({
      ...prevSpecies,
      [name]:value
    }));
  }

  return(
    <>
    <dialog id="my_modal_1" className="modal" open={openForm2}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">What did you see?</h3>
        <div className="modal-action">
          <form method="dialog" onSubmit={createSighting}> 
              <label htmlFor="date_sighted"> date_sighted</label>
              <input id="date_sighted" type="date" placeholder="Type here" className="input" name="date_sighted" value={sightings.date_sighted} onChange={handleChange}  />

              <label htmlFor="individual_seen">individual_seen</label>
              <input id="individual_seen" type="text" placeholder="Type here" className="input" name="individual_seen" value={sightings.individual_seen} onChange={handleChange} />

              <label htmlFor="location_of_sighting">location_of_sighting</label>
              <input id="location_of_sighting" type="text" placeholder="Type here" className="input" name="location_of_sighting" value={sightings.location_of_sighting} onChange={handleChange}  />

              <label htmlFor="health">health</label>
              <input type="checkbox" id="health" className="checkbox" name="health" checked={sightings.health} onChange={handleChange}/>

              <div className="mt-6">
              <label htmlFor="sighter_contact">sighter_contact</label>
              <input id="sighter_contact" type="text" placeholder="Type here" className="input" name="sighter_contact" value={sightings.sighter_contact} onChange={handleChange}  />
              <label htmlFor="season_spotted">season_spotted</label>
              <input id="season_spotted" type="text" placeholder="Type here" className="input" name="season_spotted" value={sightings.season_spotted} onChange={handleChange}  />
              <button className="btn btn-primary btn-block">Add Sighting</button>
              </div>
          </form> 
        </div>
      </div>
    </dialog>
    </>
  )
}

export default AddSightingForm;

