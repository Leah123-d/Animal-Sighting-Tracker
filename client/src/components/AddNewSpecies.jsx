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

    setNewSpecies(data); //storing the database response

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
           {/* //the form data will update the state in the app component */}
           <label htmlFor="species">Species</label>
           <input id="species" type="text" placeholder="Type here" className="input" name="species" value={species.species} onChange={handleChange} />
           <label htmlFor="common_name">common_name</label>
           <input id="common_name" type="text" placeholder="Type here" className="input" name="common_name" value={species.common_name} onChange={handleChange} />
           <label htmlFor="scientific_name">scientific_name</label>
           <input id="scientific_name" type="text" placeholder="Type here" className="input" name="scientific_name" value={species.scientific_name} onChange={handleChange} />
           <label htmlFor="est_living_in_wild">est_living_in_wild</label>
           <input id="est_living_in_wild" placeholder="approx number" className="input" name="est_living_in_wild" value={species.est_living_in_wild} onChange={handleChange}></input>
           <label htmlFor="conservation_status_code">conservation_status_code</label>
           <input id="conservation_status_code" className="input" name="conservation_status_code" value={species.conservation_status_code} onChange={handleChange}></input>
           <div className="mt-6">
           <button className="btn btn-primary btn-block">Add Species</button>
           </div>
           </form>
          {/* this will run the function to post the event to the DB  */}
           {/* will need an onSubmit for your form */}
        </div>
      </div>
    </dialog>
    </>
  )
}

export default AddNewSpecies;

