import { Link } from "react-router-dom"
import { seasons } from "./Seasons";
import { useEffect , useState } from "react";



const DeployableMenu = ( { id , season } ) => {
  return (
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    <Link to={`/category/${id}`}><li>{season}</li></Link>
    </ul>
  )
}
export default DeployableMenu