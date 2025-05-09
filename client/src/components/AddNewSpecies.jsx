import React from 'react';
import { useState } from 'react'


function AddNewSpecies({ openForm1, species }){
  const [newSpecies, setNewSpecies] = useState(
    {
      species: "",
      common_name:"",
      scientific_name:"",
      est_living_in_wild:0,
      conservation_status_code:"",
    }
  )

  const createSpecies = async (e) => {
    e.preventDefault();
    console.log("New species submitted:", newSpecies);

    try{
    const response = await fetch("/species", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSpecies),
    });
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    } 
    const data = await response.json();
    console.log("fetched data:", data);

    setNewSpecies(data); 

    // if(data.response_code != 0){
    //   console.log("no results found");
      // setErrorHandle(true); 
    //}
    } catch(error){
      console.error("error fetching data: ", error);
    } 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSpecies(prevSpecies => ({
      ...prevSpecies,
      [name]:value
    }));
  }
  return(
    <>
    <dialog id="my_modal_1" className="modal" open={openForm1}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">oh! New species?</h3>
        <div className="modal-action">
          <form onSubmit={createSpecies} className="mt-6 flex flex-col gap-2 text-xs"> 
           <label htmlFor="species">Species</label>
           <input id="species" type="text" placeholder="Type here" className="input" name="species" value={newSpecies.species} onChange={handleChange} />
           <label htmlFor="common_name">common_name</label>
           <input id="common_name" type="text" placeholder="Type here" className="input" name="common_name" value={newSpecies.common_name} onChange={handleChange} />
           <label htmlFor="scientific_name">scientific_name</label>
           <input id="scientific_name" type="text" placeholder="Type here" className="input" name="scientific_name" value={newSpecies.scientific_name} onChange={handleChange} />
           <label htmlFor="est_living_in_wild">est_living_in_wild</label>
           <input id="est_living_in_wild" placeholder="approx number" className="input" name="est_living_in_wild" value={newSpecies.est_living_in_wild} onChange={handleChange}></input>
           <label htmlFor="conservation_status_code">conservation_status_code</label>
           <input id="conservation_status_code" className="input" name="conservation_status_code" value={newSpecies.conservation_status_code} onChange={handleChange}></input>
           <div className="mt-6">
           <button className="btn btn-primary btn-block">Add Species</button>
           </div>
           </form>
        </div>
      </div>
    </dialog>
    </>
  )
}

export default AddNewSpecies;

