import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux"
import discover from "../../Assets/image/discover.png"
import paypal from "../../Assets/image/paypal.png"
import "./Buy.scss"

import Lottie from "lottie-web"
const Buy = () => {
    const buyState = useSelector(state => state.state.buyInfo)
    console.log(buyState);
    const [payMethod , SetPayMethod] = useState("discover")
    const handlePay = ()=>{
        console.log("object");
    }
    const payment = useRef()
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container : payment.current,
            renderer : "svg",
            loop: true,
            autoplay : true ,
            animationData : require("../../Assets/lottie/payment.json")
        });
        return ()=>{
             instance.destroy()
        }
    },[])
    return (
        <div className="payment">
           <div className="paymentInformation">
           <div className="PayType">
               <button onClick={()=>{SetPayMethod("discover")}}> 
                   <img src={discover} alt="payment"/>
               </button>
               <button onClick={()=>{SetPayMethod("paypal")}}> 
                   <img src={paypal} alt="paypal"/>
               </button>
           </div>
           {
               payMethod==="discover" &&
                <div className="discover">
                    <form >
                        <div className="inputGroup">
                            <label htmlFor="name">
                                your name on the card
                            </label>
                            <input required type="text" id="name" name="name"/>
                        </div>
                        <div className="inputGroup">
                            <div className="wrapper">

                                <div className="date">
                                    <label htmlFor="date">expire </label>
                                    <input required type="date" name="date" id="date"/>
                                </div>
                                <div className="cvc">
                                    <label htmlFor="info">cvc</label>
                                    <input required type="text" id="info" name="info"/>
                                </div>

                            </div>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="country">country</label>
                            <input required type="text" name="country" id="country"/>
                        </div>
                        <div className="btn">
                            <button type='submit' onClick={handlePay}>pay {buyState}$ </button>
                        </div>
                    </form>
                </div>
           }
           { payMethod === "paypal" &&
           <div className="paypal">
               <p>when click on this button will transform you into your paypal account </p>
               <button> pay {buyState}$</button>
           </div>

           }
           </div>
           <div className="lottie">
               <div className="animation" ref={payment}></div>
           </div>
        </div>
    )
}

export default Buy
