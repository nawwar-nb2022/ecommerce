import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Category from "../../components/cat/Category"
import Intro from "../../components/intro/Intro"
import Products from "../../components/Product/Products"
import products from "../../data/dd"
import "./Product.scss"
let dd = [];
const Product = () => {
    const state = useSelector(state =>state.state)
    const [productsShow  , SetProduct] = useState([])
    const categoryState = state.category
    useEffect(()=>{
        if(categoryState === "All" || categoryState === null){
            SetProduct(products)
        }else{
            SetProduct( products.filter((data)=> data.category === categoryState))
        }
    } , [categoryState])
    return (
        <div className='mainProductContainer'>
            <Intro/>
            <div className="catContainer">
                <Category cats={dd}/> 
            </div>
            <div className="products">
            {productsShow.map((data , rowId)=>{
                if(!dd.includes(data.category)){
                    dd.push(data.category)
                }
                return (
                    <Products data={data} id={data.id} key={rowId}/>
                )
            })}
            </div>

        </div>
    )
}

export default Product


