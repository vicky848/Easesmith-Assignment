import { useState } from 'react';
import indoorPlants from '../../data';
import ProductItem from '../ProductItem';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination';
import './index.css';

const ProductCard = ({ addToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = indoorPlants.slice(indexOfFirstProduct, indexOfLastProduct);

  const navigate = useNavigate();

  const onClickViewProduct = (eachPlant) => {
    navigate(`/thank-you/${eachPlant.title}`);
  };

  return (
    <div className="product-card-container">
      <div className="product-card">
        <ul className="list-container">
          {currentProduct.map((eachPlant) => (
            <ProductItem
              key={eachPlant.id}
              productDetails={eachPlant}
              onClickView={() => onClickViewProduct(eachPlant)}
              addToCart={() => addToCart(eachPlant)} 
            />
          ))}
          
        </ul>
        
        
      </div>
      <Pagination
        currentPage={currentPage}
        totalPage={Math.ceil(indoorPlants.length / productsPerPage)}
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default ProductCard;
