import { products } from "../data/products";
import { Link } from "react-router-dom";

function ProductListPage() {
  return (
    <main style={{ padding: 24, width: "100%" }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>악기 둘러보기</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 24,
          width: "100%",
        }}
      >
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            style={{ textDecoration: "none", color: "#222" }}
          >
            <div
              style={{
                border: "1px solid #eee",
                borderRadius: 12,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                transition: "transform 0.2s",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div style={{ padding: 14 }}>
                <h3 style={{ margin: "6px 0" }}>{item.name}</h3>
                <p style={{ margin: 0, fontWeight: "bold" }}>{item.price.toLocaleString()}원</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default ProductListPage;
