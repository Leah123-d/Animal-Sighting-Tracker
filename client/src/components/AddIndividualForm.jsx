// function AddIndividualForm({ openForm1}){
//   return(
//     <>
//     {/* Open the modal using document.getElementById('ID').showModal() method */}
//     {/* <button className="btn" onClick={handleClickForm1.showModal()}>Please complete to report a new sighting!</button> */}
//     <dialog id="my_modal_1" className="modal" open={openForm1}>
//       <div className="modal-box">
//         <h3 className="font-bold text-lg">Hello!</h3>
//         <div className="modal-action">
//           <form onSubmit={createEvent} className="mt-6 flex flex-col gap-2 text-xs"> 
//           {/* //the form data will update the state in the app component */}
//           <label htmlFor="eventTitle">Event Name</label>
//           <input id="eventTitle" type="text" placeholder="Type here" className="input" name="title" value={newEvent.title} onChange={handleChange} />

//           <label htmlFor="description">Description</label>
//           <input id="description" type="text" placeholder="Type here" className="input" name="details" value={newEvent.details} onChange={handleChange} />

//           <label htmlFor="venue">Venue</label>
//           <input id="venue" type="text" placeholder="Type here" className="input" name="venue" value={newEvent.venue} onChange={handleChange} />

//           <label htmlFor="extras">Additional details</label>
//           <textarea id="extras" placeholder="Parking Instructions.... Other event details...." className="textarea" name="extras" value={newEvent.extras} onChange={handleChange}></textarea>
//           <div className="mt-6">
//           <button className="btn btn-primary btn-block">Create Event</button>
//           </div>
//           </form>
// {/* this will run the function to post the event to the DB  */}
// {/* will need an onSubmit for your form */}
//         </div>
//       </div>
//     </dialog>
//     </>
//   )
// }

// export default AddIndividualForm;
