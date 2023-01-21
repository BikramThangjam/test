import Home from './pages/home/Home';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import ProductDetail from './components/productDetail/ProductDetail';
import Favourites from './components/favourites/Favourites';
import Cart from './pages/cart/Cart';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import ResetPassword from './pages/resetPassword/ResetPassword';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<ProductDetail/>} />
                    <Route path="/favourites" element={<Favourites />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/reset_password" element={<ResetPassword />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </Provider>
    )
}

export default App;