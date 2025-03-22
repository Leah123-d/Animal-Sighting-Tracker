import { useState } from 'react'

function AddIndividualForm({ openForm3, individuals }){
  const [newIndividual, setNewIndividual] = useState(
    {
      nickname: "",
      classification:"",
      active_season:"",
    }
  )

  const createIndividual = async (e) => {
    e.preventDefault();
    console.log("New individual submitted:", newIndividual);

    try{
    const response = await fetch("/individuals", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newIndividual),
    });
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    } 
    const data = await response.json();
    console.log("fetched data:", data);

    setNewIndividual(data); 

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
    setNewIndividual(prevIndiv => ({
      ...prevIndiv,
      [name]:value
    }));
  }
  return(
    <>
    <dialog id="my_modal_1" className="modal" open={openForm3}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Again? Where?</h3>
        <div className="modal-action">
          <form  method="dialog" className="mt-6 flex flex-col gap-2 text-xs" onSubmit={createIndividual}> 
           <label htmlFor="nickname">nickname</label>
           <input id="nickname" type="text" placeholder="Type here" className="input" name="nickname" value={individuals.nickname} onChange={handleChange} />
           <label htmlFor="classification">classification</label>
           <input id="classification" type="text" placeholder="Type here" className="input" name="classification" value={individuals.classification} onChange={handleChange} />
           <label htmlFor="active_season">active_season</label>
           <input id="active_season" type="text" placeholder="Type here" className="input" name="active_season" value={individuals.active_season} onChange={handleChange} />
           <div className="mt-6">
           <button className="btn btn-primary btn-block">Add Individual</button>
           </div>
           </form>
        </div>
      </div>
    </dialog>
    </>
  )
}

export default AddIndividualForm;

