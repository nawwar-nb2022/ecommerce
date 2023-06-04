import Lottie from "lottie-web"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import products from "../../data/dd"
import {CardNotification, setBuy} from "../../Redux/features/State"

import "./SC.scss"

const SC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state.state)
    let stateLength = state.cart
    let newObject = {}
    let array = []
    const arrayToObject = ()=>{
        for( let i in stateLength){
            if( stateLength[i] in newObject){
                newObject[stateLength[i]] +=1
            }
            else{
                newObject[stateLength[i]] = 1
            }
        }
    } 
    arrayToObject()

    let dataKey = Object.keys(newObject)

    const productCart = ()=>{
     products.map(data=>{
        if (dataKey.includes(data.id.toString())){
              if(!array.includes(data)){
                  array.push(data)
                }
            }   
            return ""
    })
}    
    productCart()
    const [ObjectValue, setObject] = useState({})
    
useEffect(()=>{
    setObject(newObject)
} , [])

    // handle inc and dec 
    const [bg , setBg]=useState()
    const handleInc = (id)=>{        
        setBg(id)
        setTimeout(()=>{
            setBg(false)
        } ,[200])


        setObject((prev)=>{
            return(
                {...prev , [id] : ObjectValue[id]+1 }
            )
        })

    } 
    const handleDec =(id)=>{
        if(ObjectValue[id] >= 1){
            setObject((prev)=>{
                return(
                    {...prev , [id] : ObjectValue[id]-1 }
                )
            })
        }
    }

    let totalPayment = 0
    const handlePayment = ()=>{
        navigate("/payment")
        
        for(let i in array){
            totalPayment += +array[i].price * +ObjectValue[array[i].id]
        }
        dispatch(setBuy(totalPayment))
        dispatch(CardNotification(""))
        localStorage.removeItem("cart")
        navigate("/payment")
    }
    const animation= useRef()
    useEffect(() => {
        const instance = Lottie.loadAnimation({
            container : animation.current,
            render : "svg",
            loop : true , 
            autoplay : true,
            animationData : require("../../Assets/lottie/emptyCart.json")
        })
        return () => {
            instance.destroy()
        }
    }, [])

    
    return (
        
        <>
        {stateLength ?
            <>
            <div className="cartItems">
                        {array.map((data,rowId)=>{
                            return(
                                <div className="cartItem" key={rowId}>
                                    <div className="imageSection">
                                        <img src={data.image} alt={data.name}/>
                                    </div>
                                    <div className="informationSectionCart">
                                        <div className="topSection">
                                            <div className="name">{data.name}</div>
                                            <div className="price">
                                                price for each {data.price} $
                                            </div>
                                        </div>
                                        <div className="desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur incidunt placeat, facere deleniti officia labore rerum dolores temporibus magnam consectetur?
                                        </div>
                                        <div className="payInfo">
                                            <div className="count">
                                                <div className="dec" onClick={()=>handleDec(data.id)}>
                                                    -
                                                </div>
                                                <div className={bg===data.id?"countOrder incColor":"countOrder"}>
                                                    {ObjectValue[data.id]}
                                                </div>
                                                <div className="inc" onClick={()=>handleInc(data.id)}>
                                                    +
                                                </div>
                                            </div>
                                            <div className="totalPrice">
                                                total price : {data.price * newObject[data.id] } $
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                    <div className="pay">
                        <button onClick={handlePayment}>buy now</button>
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
