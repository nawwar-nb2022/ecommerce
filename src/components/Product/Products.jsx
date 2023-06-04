import { Link } from "react-router-dom"
import "./Products.scss"
const Products = ({data , id}) => {
    return (
        <div className="product">

            <Link to= {"/" + data.id} >
                <div className="imageSection">
                    <img src={data.image} alt=""/>    
                </div>       
            </Link>
                <div className="info">
                <div className="name">{data.name}</div>    
                <div className="price">{data.price} $</div>    
                </div>     
            
        </div>

    )
}

export default Products
