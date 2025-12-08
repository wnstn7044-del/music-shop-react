import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OrderCompletePage from "./pages/OrderCompletePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { useCart } from "./contexts/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { useAuth } from "./contexts/AuthContext";
function App() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const itemCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  return (
    <div className="app-inner">
      <BrowserRouter>
        <header style={{ padding: 16, borderBottom: "1px solid #ddd" }}>
          <Link to="/">홈</Link> | <Link to="/products">악기 둘러보기</Link> |{" "}
          <Link to="/cart">
            <FiShoppingCart /> 장바구니 ({itemCount})
          </Link>{" "}
          |{" "}
          {user ? (
            <>
              <span>{user.email}</span> <button onClick={logout}>로그아웃</button>
            </>
          ) : (
            <>
              <Link to="/login">로그인</Link> | <Link to="/register">회원가입</Link>
            </>
          )}
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/order-complete" element={<OrderCompletePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
