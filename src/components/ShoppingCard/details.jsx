import {  useEffect, useState } from "react"
const Details = ({data , info  ,priceForPro }) => {
    const [countInformation , setCountInfo] =useState(info)

    const incFunction =()=>{
        setCountInfo(
            prev=> ({...prev , count : prev.count+1 })
        )
        // let price = countInformation.count * data.price
        // dispatch(setBuy({price : countInformation.count * data.price , id : countInformation.id}))
    }
    const decFunction = ()=>{
        setCountInfo(
            prev=> ({...prev , count : prev.count-1 })
            )
    }
    useEffect(()=>{
        priceForPro(countInformation.count  , data.id)
    },[priceForPro , countInformation.count , data.price , data.id])
    return (
            <div className="cartItem" >
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
                        <div className="dec"  onClick={()=>decFunction()}>
                            -
                        </div>
                        <div className="countOrder">
                            {countInformation.count}
                        </div>
                        <div className="inc" onClick={()=>incFunction()}>
                            +
                        </div>
                    </div>
                    <div className="totalPrice">
                        total price :  {countInformation.count * data.price}$
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Details
