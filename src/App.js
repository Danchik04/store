import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetail from './components/ProductDetail';
import './App.css';

const initialProducts = [
  { id: 1, name: 'T-Shirt', description: 'A cool T-shirt', price: 19.99, image_url: 'https://example.com/images/tshirt.jpg' },
  { id: 2, name: 'Jeans', description: 'Stylish jeans', price: 49.99, image_url: 'https://example.com/images/jeans.jpg' },
  { id: 3, name: 'Jacket', description: 'Warm jacket', price: 99.99, image_url: 'https://example.com/images/jacket.jpg' }
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage products={products} />} />
          <Route path="/products/:id" element={<ProductDetail products={products} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage products={products} setProducts={setProducts} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
