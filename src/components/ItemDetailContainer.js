import { useParams } from "react-router-dom"
import { seasons } from "./Seasons";
import { useState , useEffect } from "react";
import ItemDetail from "./ItemDetail";


const Loading = () => {
  return(
    <section className="flex flex-col items-center w-full">
    <img className="loading__logo" src="/images/ActivaLogo.png" alt="" />
    <strong>Loading...</strong>
    </section>
    
  )
}

const ItemDetailContainer = () => {

  const [ loading , setLoading ] =useState(true);

    const { id: itemId } = useParams()

    const [item , setItem ] = useState({})

    useEffect(() => {
      getItemDetails().then( response => {
        setItem ( response )
        setLoading(false);
      } )
    } , [] )
    

    const getItemDetails = () => {
      return new Promise ( ( resolve ) => {
        setTimeout(() => {
          resolve ( seasons.find (p => p.id == itemId) )
        }, 3000 );
      } ) 
    }

  return (

    <>
    {loading ? <Loading/> : <ItemDetail item={item} />}
    </>

    
  )
}
export default ItemDetailContainer