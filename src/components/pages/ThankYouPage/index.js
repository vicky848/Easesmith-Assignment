import { AiOutlineClose } from "react-icons/ai";
import {useParams, useNavigate} from 'react-router-dom'
import './index.css'

const ThankYouPage = () => {

const {productName} = useParams();

const navigate = useNavigate()
  
const handleClose = () => {
    navigate('/')
}

    return (

    
        <div className=' thank-page-container'>
               
        
        <AiOutlineClose className="close-icon" onClick={handleClose} />
      
        <h1 className='thank-you-heading'>Thank You for interest  in {productName}</h1>

   
    </div>



    )
}
export default ThankYouPage