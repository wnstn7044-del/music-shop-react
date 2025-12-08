import { useNavigate } from "react-router-dom";

function OrderCompletePage() {
  const nav = useNavigate();
  return (
    <main
      style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div
        style={{
          width: 360,
          padding: 28,
          borderRadius: 16,
          background: "#fff",
          boxShadow: "0 8px 24px rgba(0,0,0,.12)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: 12 }}>주문이 완료되었습니다 🎉</h2>
        <p style={{ marginBottom: 20 }}>주문해 주셔서 감사합니다.</p>
        <button
          onClick={() => nav("/products")}
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
          악기 더 둘러보기
        </button>
      </div>
    </main>
  );
}
export default OrderCompletePage;
