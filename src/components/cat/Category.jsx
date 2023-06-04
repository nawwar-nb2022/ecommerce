import { useDispatch } from "react-redux"
import { categoryShow } from "../../Redux/features/State"
import  "./category.scss"
const Category = ({cats}) => {
    const dispatch  = useDispatch()
    return (
        <div className="cats">
            <div className="cat"  onClick={()=>dispatch(categoryShow("All"))}> All </div>
            {cats.map((data , rowId)=>{
                return(
                    <div className="cat" key={rowId} onClick={()=>dispatch(categoryShow(data))}>
                        {data}
                    </div>
                )
            })}

        </div>
    )
}

export default Category
