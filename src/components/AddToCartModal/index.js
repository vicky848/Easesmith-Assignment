import { AiOutlineClose } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import './index.css';

const AddToCartModel = ({ cartItems, onClose , onDeleteItem}) => {
  return (
    <>
    <div className='main-cart-container'>
      <AiOutlineClose className="close-icon-cart" onClick={onClose} />
      <h3 className='your-cart'>Your Cart</h3>

      {cartItems.length > 0 ? (
        <div className='cart-container'>
          {cartItems.map((item, index) => (
            <div key={index} className='cart-item'>
              <img src={item.image} alt={item.title} className='plant-image' />
              <div className='cart-item-details'>
                <h1 className='plant-name'>{item.name}</h1>
                <p className='price'>{item.price}</p>
                <div className="add-button-container">
                <button className="buy-button">BUY NOW</button>
                <button className="delete-button">
                <MdDelete  className="delete-icon"  onClick={()=> onDeleteItem(index)}/>
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
        
      
      </div>

  
    </>
  );
};

export default AddToCartModel;