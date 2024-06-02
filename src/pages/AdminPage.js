import React from 'react';
import AdminPanel from '../components/AdminPanel';

const AdminPage = ({ products, setProducts }) => {
  return (
    <div className="admin-page">
      <AdminPanel products={products} setProducts={setProducts} />
    </div>
  );
};

export default AdminPage;
