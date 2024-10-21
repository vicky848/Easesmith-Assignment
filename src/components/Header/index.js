
import { CgProfile } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import { BsCart2 } from "react-icons/bs";
import { PiPlantThin } from "react-icons/pi";
import './index.css'


const Header = ({toggleCartModel}) => {



return(

<header className="header">
    <div className = "nav-first-item">
        <p className = "nav-text">Free Shipping on orders above 999/-</p>
        <p className = "nav-text">Call us on: +919846589760</p>

    </div>
    <div className = "navbar-item">
        <div>
         
<h1 className = "chaperone-heading">Chaperone</h1>

        </div>
   <ul className = "list-container">
    <li className = "list-item">Home</li>
    <li className = "list-item">Plants & Pots</li>
    <li className = "list-item">Tools</li>
    <li className = "list-item">Our Services</li>
    <li className = "list-item">Blogs</li>
    
   
    
   </ul>
   
            <div className = "icon-container">
                <div className = "icon-item">
                <CgProfile className="profile-icon" /> 
                <p className="profile">My Profile</p>   
                </div>
                <div className="icon-item">
    
                <BsCart2 className="cart-icon" onClick = {toggleCartModel} /> 
                
              <p className="cart">Cart</p>
                </div> 
           
            </div> 
              
           



    </div>

<div className="input-container">
<ImSearch className="search-icon"/>
<input  type = "search" placeholder = "Search Plant" className = "search-input"/> 
<PiPlantThin className="plant-icon" />
</div>
 



</header>

)}

export default Header