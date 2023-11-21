import React, { useEffect, useState } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

  // TODO: Replace with state variable
  const [toggle, changeToggle] = useState(true);
  const [selectedProduct, changeSelectedProduct] = useState();

  useEffect(()=>{
    if(selectedProduct){changeToggle(true)}
  }, [selectedProduct]);

  useEffect(()=>{
    if(!toggle){changeSelectedProduct()};
    localStorage.setItem('toggle', toggle)
  }, [toggle]);

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={selectedProduct? item.id === selectedProduct.id : false}
              onClick={() => changeSelectedProduct(item)}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => {changeToggle(!toggle)}}>
            {toggle ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={toggle} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
