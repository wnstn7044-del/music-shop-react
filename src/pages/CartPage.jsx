import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
function CartPage() {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const nav = useNavigate();
  const total = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  if (!cartItems.length)
    return (
      <main style={{ padding: 40, textAlign: "center" }}>
        <h2>장바구니</h2>
        <p>담긴 상품이 없습니다.</p>
      </main>
    );
  const order = () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      nav("/login");
    } else {
      clearCart();
      nav("/order-complete");
    }
  };
  return (
    <main style={{ padding: 40, display: "flex", justifyContent: "center" }}>
      <div
        style={{
          maxWidth: 800,
          width: "100%",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 20px rgba(15,23,42,.12)",
          padding: 24,
        }}
      >
        <h2 style={{ marginBottom: 16 }}>장바구니</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {cartItems.map((i) => (
            <li
              key={i.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <span>
                {i.name} x {i.quantity}개
              </span>
              <span>{(i.price * i.quantity).toLocaleString()}원</span>
            </li>
          ))}
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <strong>총 금액: {total.toLocaleString()}원</strong>
          <button
            onClick={order}
            style={{
              padding: "10px 22px",
              borderRadius: 999,
              border: "none",
              background: "linear-gradient(135deg,#4f46e5,#3b82f6)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            주문하기
          </button>
        </div>
      </div>
    </main>
  );
}
export default CartPage;
