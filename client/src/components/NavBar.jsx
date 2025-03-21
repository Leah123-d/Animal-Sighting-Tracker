import { LuBinoculars } from "react-icons/lu";

//I want to change the behavior of rendering the granchild. 
//I need it to appear onClick and so it would need to be its own child with the event passed from the child 

function NavBar({ handleClickForm1 }){
   
  return(
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
      <a className="btn btn-ghost text-xl"><LuBinoculars />Animal Sightings Tracker</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><a onClick={handleClickForm1}>Report a Sighting!</a></li>
        <li><a>Report on existing species!</a></li>
        <li><a>Report new Species!</a></li>
        </ul>
      </div>
        <div className="navbar-end">
        {/* <a className="btn">Button</a> */}
      </div>

    </div>
    
  )
}

export default NavBar;