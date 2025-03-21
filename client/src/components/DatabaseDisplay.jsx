import { useState} from 'react'
import { TfiTrash } from "react-icons/tfi";
import { SlPencil } from "react-icons/sl";

//update this database component
//will use a get route to display the different databases mapped out
//at the end will have 3 sets of databases with build in functionalities 
function DatabaseDisplay({ species, individuals, sightings,fetchSpecies,isEditOpen,setisEditOpen,editData,setEditData}){
  const [deleteConfirmation, setDeleteConfirmation] = useState("");


  const deleteEntry = async (table, identifer) => {
    console.log(`deleting from table: ${table}`);

      try{
      const url = `/${table}/${identifer}`; 
      const response = await fetch(url, 
                                  {method: 'DELETE'});
        if(!response.ok){
          throw new Error('something went wrong')
        }
        setDeleteConfirmation(`${table} entry successfully deleted!`);
      }
      catch(error) {
        console.log(error);
        //handle error state here too
      }
    }

    const editEntry = async () => {
        try{
        const url = `/${editData.table}/${editData.identifer}`; 
        const response = await fetch(url, 
                                    {method: 'PUT',
                                      body: JSON.stringify(editData),
                                    });
          if(!response.ok){
            throw new Error('update failed')
          }
          setisEditOpen(false);
          console.log('update successful!');
        }
        catch(error) {
          console.log(error);
          //handle error state here too
        }
      }

  return(
    <div className="databaseContainer">
      <p>{deleteConfirmation ? "" : deleteConfirmation}</p>
      <div className="overflow-x-auto">
        <h2>Species Database</h2>
        <table className="table">
          {/* species database */}
          <thead>
            <tr>
            <th>id</th>
            <th>species</th>
            <th>common_name</th>
            <th>scientific_name</th>
            <th>est_living_in_wild</th>
            <th>conservation_status_code</th>
            <th>created_at</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {species && species.length > 0 ? (
              species.map((element) => (
                <tr key={element.id}>
                <th>{element.id}</th>
                <th>{element.species}</th>
                <td>{element.common_name}</td>
                <td>{element.scientific_name}</td>
                <td>{element.est_living_in_wild}</td>
                <td>{element.conservation_status_code}</td>
                <td>{element.created_at}</td>
                <td><button onClick={async () => {
                                                  await fetchSpecies('species', element.common_name);
                                                  setisEditOpen(true); }}>
                                                  <SlPencil /></button></td>
                <td><button onClick={() => deleteEntry("species", element.common_name)} ><TfiTrash /></button></td>
                </tr>
              ))
            ) : (
              <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No Species available
              </td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
      <h2>Individuals Database</h2>
      <table className="table">
        {/* individuals database */}
        <thead>
          <tr>
          <th>id</th>
          <th>nickname</th>
          <th>classification</th>
          <th>active_season</th>
          <th>created_at</th>
          <th>Edit</th>
          <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {individuals && individuals.length > 0 ? (
            individuals.map((element) => (
              <tr key={element.id}>
              <th>{element.id}</th>
              <th>{element.nickname}</th>
              <td>{element.classification}</td>
              <td>{element.active_season}</td>
              <td>{element.created_at}</td>
              <td><button onClick={() => deleteEntry("individuals", element.nickname)} ><TfiTrash /></button></td>
              </tr>
            ))
          ) : (
            <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              No Individuals available
            </td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
    <div className="overflow-x-auto">
        <h2>Sightings Database</h2>
        <table className="table">
          {/* sightings database */}
          <thead>
            <tr>
            <th>id</th>
            <th>date_sighted</th>
            <th>individual_seen</th>
            <th>location_of_sighting</th>
            <th>health</th>
            <th>sighter_contact</th>
            <th>season_spotted</th>
            <th>created_at</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sightings && sightings.length > 0 ? (
              sightings.map((item,index) => (
                <tr key={index}>
                <th>{item.id}</th>
                <th>{item.date_sighted}</th>
                <td>{item.individual_seen}</td>
                <td>{item.location_of_sighting}</td>
                <td>{item.health}</td>
                <td>{item.sighter_contact}</td>
                <td>{item.season_spotted}</td>
                <td>{item.created_at}</td>
                <td><button onClick={() => deleteEntry("sightings", item.individual_seen)} ><TfiTrash /></button></td>
                </tr>
              ))
            ) : (
              <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No Sightings available
              </td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
    {isEditOpen && (
      <div className="modal">
        <h3>edit entry</h3>
        <input type="text"
        value={editData?.identifer || ""}
        onChange={((e) => setEditData({...editData, identifier: e.target.value }))}
        />
        <button onClick={editEntry}>save changes</button>
      </div>
    )}
  </div>
  
  )
}
export default DatabaseDisplay