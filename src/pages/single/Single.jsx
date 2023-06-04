import { Alert, Rating } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom";
import products from "../../data/dd";
import { CardNotification, setBuy } from "../../Redux/features/State";
import "./Single.scss"
const Single = () => {
    const {id} = useParams();
    const data = products[id]
    const [alert , setAlert] = useState()
    let ItemId = localStorage.cart ? JSON.parse(localStorage.cart ) : []
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAlert =()=>{
        ItemId.push(id)

        localStorage.setItem("cart" ,JSON.stringify(ItemId))
        
        dispatch(CardNotification(ItemId))
        setAlert("cart")
        setTimeout(()=>{
            setAlert("")
        },1500)
    }
    const buyNow = ()=>{
        dispatch(setBuy(data.price))
        navigate("/payment")
    }

    return (
        <div className="single_product">
            <div className="imageSectionSingle">
                <img src={data.image} alt=""/>
            </div>
            <div className="information">
                <Link to="/"> ⬅ back home</Link>
                <div className="mian-info">
                    <span> brand :{data.brand}</span>
                    <span> price {data.price} $ </span>
                </div>
                <div className="rating">
                <Rating name="half-rating-read" value={data.rating}  precision={0.5} readOnly />
                </div>
                <div className="description">
                    <h2>
                        {data.name}
                    </h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, blanditiis iste ullam et sed laudantium eos facilis error nobis quasi?
                </div>
                <div className="buy">
                    <button className="buyNow" onClick={buyNow}>
                        buy now
                    </button>

                    <button className="addToCart" onClick={handleAlert}>
                        add to cart
                    </button>
                    {

                    }
                </div>
            </div>
            {   alert==="cart" &&
            <div className="alert">
                <Alert onClose={() => {setAlert("")}}>{data.name} added to the cart</Alert>
            </div>
            }
        </div>
    )
}

export default Single
