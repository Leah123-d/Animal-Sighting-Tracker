//update this database component
//will use a get route to display the different databases mapped out
//at the end will have 3 sets of databases with build in functionalities 
function DatabaseDisplay(){
return(
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th></th>
      <th>Event Name</th>
      <th>Description</th>
      <th>Venue</th>
      <th>Additional details</th>
      <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {currentEvents.length > 0 ? (
        currentEvents.map((event) => (
          <tr key={event.id}>
          <th>{event.id}</th>
          <td>{event.title}</td>
          <td>{event.details}</td>
          <td>{event.venue}</td>
          <td>{event.extras}</td>
          <td><button><SlPencil /></button></td>
          <td><button onClick={() => deleteEvent(event.id)} ><TfiTrash /></button></td>
          <td><button><GrFavorite /></button></td>
          </tr>
        ))
      ) : (
        <tr>
        <td colSpan="6" style={{ textAlign: "center" }}>
          No events available
        </td>
        </tr>
        )}
    </tbody>
  </table>
</div>
)
}
export default DatabaseDisplay