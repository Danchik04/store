import React, { useState } from 'react';

const AdminPanel = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', image_url: '' });

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: '', description: '', price: '', image_url: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <h2>Add New Product</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image_url}
          onChange={(e) => setNewProduct({ ...newProduct, image_url: e.target.value })}
        />
        <button type="button" onClick={handleAddProduct}>Add Product</button>
      </form>

      <h2>Product List</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image_url} alt={product.name} />
            {product.name} - ${product.price}
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
