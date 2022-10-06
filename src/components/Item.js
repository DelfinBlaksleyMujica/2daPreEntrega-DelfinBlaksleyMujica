import { Link } from "react-router-dom"

const Item = ( { id , name , price , img } ) => {
    return (
        <>
        <Link to={ `/item/${id}` }>
        <div className="card w-120 bg-base-100 shadow-xl m-7">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl cardImageSize" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </Link>
        
        </>
    )
    }
export default Item