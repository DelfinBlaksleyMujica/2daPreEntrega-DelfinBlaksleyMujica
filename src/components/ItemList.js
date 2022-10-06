import React, { useEffect , useState } from "react"
import { seasons } from "./Seasons";
import Item from "./Item";
import { useParams } from "react-router-dom";


const Loading = () => {
    return (
        <section className="flex flex-col items-center w-full">
            <img className="loading__logo" src="/images/ActivaLogo.png" alt="" />
            <strong>Loading...</strong>
        </section>
    )
}



const ItemList = () => {

    const [ loading , setLoading ] =useState(true);


    const { id:itemId } = useParams();

    const [items, setItems] = useState( [] );


    useEffect(() => { 
        getProducts().then( response => {
            setItems ( response );
            setLoading(false);
        })
    } , [ itemId ] );

    const getProducts = () => {
        return new Promise ( resolve => {
            setTimeout( () => { 
                resolve ( seasons.find( p=> p.id == itemId) );
            } , 2000 )
        })
    }


    return (
    <>
    {loading ? <Loading/> : <Item key={items.id} {...items } />}
    
    </>
    )
}
export default ItemList