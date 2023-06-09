// import Lottie from "lottie-web"
import {  useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import products from "../../data/dd"
import Details from "./details"
import { setBuy} from "../../Redux/features/State"

import "./SC.scss"

const SC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state.state)
    const arrayData = []
    const showData= []
    for (const [key, value] of Object.entries(state.cart)) {
       arrayData.push({
           id : key,
           count : value
       })
}


const showProduct = ()=>{
    arrayData.forEach(arr=>{
        showData.push(products[arr.id])
    })
}
showProduct()
let totalPay = []
const priceForPro = (val , id)=>{
    // console.log(val)
    totalPay.push([val , id])
}

const Buy = ()=>{
    navigate("/payment")
}
useEffect(
    ()=>{
        dispatch(setBuy(totalPay))
    },[dispatch ]
)

const animation = useRef()
    return (
          
        <>
        {arrayData.length > 0 ?
            <>
            <div className="cartItems">
                        {showData.map((data,rowId)=>{
                            return(
                            <Details key={rowId} data={data} info={arrayData[rowId]} priceForPro={priceForPro} />
                            )
                        })}
                    </div>
                    
                    <div className="pay">
                        <button onClick={Buy}>buy now</button>
                    </div>
            </>
        :
            <div className="emptyCart">
                <div className="text">
                    <h2>
                        oops their is no item in the cart yet 
                    </h2>
                    <Link to="/">go and add some</Link>
                </div>

               <div className="lottieAnimation"></div>
               <div  ref={animation}></div>
            </div>
        }
       
</>

)
}

export default SC
