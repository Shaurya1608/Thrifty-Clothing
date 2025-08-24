import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { FirebaseAuthProvider, useFirebaseAuth } from './contexts/FirebaseAuthContext';
import Header from './components/layout/Header';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import EmailVerification from './pages/EmailVerification';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ChangePassword from './pages/ChangePassword';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import ProfileAddresses from './pages/ProfileAddresses';
import ProfileWishlist from './pages/ProfileWishlist';
import Cart from './pages/Cart';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AdminProducts from './pages/AdminProducts';
import AdminProductUpload from './pages/AdminProductUpload';
import AdminProductEdit from './pages/AdminProductEdit';
import AdminSellers from './pages/AdminSellers';
import AdminOrders from './pages/AdminOrders';
import SellerDashboard from './pages/SellerDashboard';
import SellerApplication from './pages/SellerApplication';



// Landing Route Guard
const LandingRoute = () => {
  const { user, loading } = useFirebaseAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }
  
  // If user is already logged in, redirect to home
  if (user) {
    return <Navigate to="/home" replace />;
  }
  
  return <Landing />;
};

// App Layout Component
const AppLayout = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  
  return (
    <div className="min-h-screen flex flex-col">
      {!isLandingPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingRoute />} />
                        <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/addresses" element={<ProfileAddresses />} />
          <Route path="/profile/wishlist" element={<ProfileWishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/products/upload" element={<AdminProductUpload />} />
          <Route path="/admin/products/edit/:productId" element={<AdminProductEdit />} />
          <Route path="/admin/sellers" element={<AdminSellers />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/seller" element={<SellerDashboard />} />
          <Route path="/seller/apply" element={<SellerApplication />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <FirebaseAuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </FirebaseAuthProvider>
  );
}

export default App;
