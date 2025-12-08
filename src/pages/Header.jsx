import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Header({ user, onLogout }) {
  const { cart } = useContext(CartContext);
  const nav = useNavigate();

  const navStyle = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "16px 24px",
    borderBottom: "1px solid #eee",
  };

  const linkStyle = {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#111",
  };

  const buttonStyle = {
    padding: "8px 18px",
    borderRadius: 999,
    border: "none",
    background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(59,130,246,0.35)",
    transition: "0.2s",
  };

  return (
    <header style={navStyle}>
      <Link to="/" style={linkStyle}>
        홈
      </Link>
      <Link to="/products" style={linkStyle}>
        악기 둘러보기
      </Link>
      <Link to="/cart" style={linkStyle}>
        🛒 장바구니 ({cart.length})
      </Link>

      <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
        {user ? (
          <>
            <span style={{ fontWeight: "bold" }}>{user}</span>
            <button style={buttonStyle} onClick={onLogout}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button style={buttonStyle}>로그인</button>
            </Link>
            <Link to="/register">
              <button style={buttonStyle}>회원가입</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
