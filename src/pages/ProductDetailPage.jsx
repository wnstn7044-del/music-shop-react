import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { getProductById } from "../data/products";

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = getProductById(id);
  if (!product) return <main style={{ padding: 24 }}>상품을 찾을 수 없습니다.</main>;
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg,#eef2ff,#e0f2fe)",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
          gap: 32,
          alignItems: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: 16,
            boxShadow: "0 10px 30px rgba(0,0,0,.18)",
            objectFit: "cover",
            maxHeight: 380,
          }}
        />
        <section
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 24,
            boxShadow: "0 10px 30px rgba(15,23,42,.15)",
          }}
        >
          <h2 style={{ margin: "0 0 8px", fontSize: 28 }}>{product.name}</h2>
          <p style={{ margin: "0 0 16px", color: "#6b7280" }}>{product.description}</p>
          <p style={{ margin: "0 0 24px", fontSize: 24, fontWeight: "bold" }}>
            {product.price.toLocaleString()}원
          </p>
          <button
            onClick={() => addToCart(product)}
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: 999,
              border: "none",
              background: "linear-gradient(135deg,#4f46e5,#3b82f6)",
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 8px 18px rgba(59,130,246,.45)",
            }}
          >
            장바구니 담기
          </button>
        </section>
      </div>
    </main>
  );
}
export default ProductDetailPage;
