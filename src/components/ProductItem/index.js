import { IoStar } from "react-icons/io5";
import './index.css'

const ProductItem = props => {

    const {productDetails, onClickView, addToCart} = props 
    const{image, title, text,ranking, price} = productDetails

    return(

   <li className = "list-item">
   <div className = "image-container">
   <img src = {image} alt={title} className = "image"/>
   <button className = "button-view-product" onClick={onClickView}>View Product</button>
   </div>
   <div className='content'>
   <h2 className ="title"> {title}</h2>
    <p className =  "text">{text}</p>
    <p className = "ranking">
    <span className="span-star">
    <IoStar className = "star" />
    <IoStar className = "star" />
    <IoStar className = "star" />
    <IoStar className = "star" />
    <IoStar className = "star" />
    </span>
     
    {ranking}</p>
    <p className = "price">{price}</p>
   </div>
    <div className='button-container'>
    <button className = "button-add-to-cart" onClick = {addToCart}>- Add to Cart + </button>
    <button className = "button-buy-on-rent">Buy on Rent</button>

    </div>

   </li>



    )



}
export default ProductItem