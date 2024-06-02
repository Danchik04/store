import React from 'react';
import ProductList from '../components/ProductList';

const ProductsPage = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
