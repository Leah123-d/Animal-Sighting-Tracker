import { LuBinoculars } from "react-icons/lu";

function NavBar({ handleClickForm1,handleClickForm2,handleClickForm3 }){
   
  return(
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
      <a className="btn btn-ghost text-xl"><LuBinoculars />Animal Sightings Tracker</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><a onClick={handleClickForm1}>Report new Species!</a></li>
        <li><a onClick={handleClickForm2}>Report a Sighting!</a></li>
        <li><a onClick={handleClickForm3}>Report an existing species!!</a></li>
        </ul>
      </div>
        <div className="navbar-end">
        <a className="btn">View Database</a>
        {/* add a onclick to update the state from this click to render the database */}
      </div>

    </div>
    
  )
}

export default NavBar;