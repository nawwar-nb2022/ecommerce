import { Alert, Rating } from "@mui/material";
import { useEffect, useState } from "react";
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
    const navigate = useNavigate()

        const dispatch = useDispatch()
    
    const handleAlert =()=>{
        setAlert("cart")
        setTimeout(()=>{
            setAlert("")
        },1500)
    }


    const buyNow = ()=>{
        dispatch(setBuy(data.price))
        navigate("/payment")
    }
    const [count , setCount]  = useState(1)

    useEffect(()=>{
        dispatch(CardNotification( {id , count }))
    },[count , dispatch , id])
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
                <div className="count">
                    <div className="dec" onClickCapture={()=>setCount(count-1)}>
                        -
                    </div>
                    <div className="number">
                        {count}
                    </div>
                    <div className="inc" onClickCapture={()=>setCount(count+1)} >
                        +
                    </div>
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
