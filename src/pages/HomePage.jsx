import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "기타",
    desc: "입문용부터 공연용까지",
    image: "https://images.pexels.com/photos/625788/pexels-photo-625788.jpeg",
  },
  {
    title: "일렉기타",
    desc: "락/메탈 전용 일렉기타",
    image: "https://images.pexels.com/photos/2105038/pexels-photo-2105038.jpeg",
  },
  {
    title: "베이스",
    desc: "밴드 사운드를 책임지는 베이스",
    image: "https://images.pexels.com/photos/8198070/pexels-photo-8198070.jpeg",
  },
  {
    title: "피아노",
    desc: "디지털/업라이트 피아노",
    image: "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg",
  },
  {
    title: "신디사이저",
    desc: "다양한 사운드 메이킹",
    image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
  },
  {
    title: "드럼",
    desc: "드럼/전자드럼 세트",
    image: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg",
  },
  {
    title: "퍼커션",
    desc: "카혼·젬베 등 리듬 악기",
    image: "https://images.pexels.com/photos/7285476/pexels-photo-7285476.jpeg",
  },
  {
    title: "관악기",
    desc: "색소폰·트럼펫 등 관악기",
    image: "https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg",
  },
  {
    title: "현악기",
    desc: "바이올린·첼로 등 현악기",
    image: "https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg",
  },
  {
    title: "레코딩 장비",
    desc: "마이크·오디오 인터페이스",
    image: "https://images.pexels.com/photos/10681799/pexels-photo-10681799.jpeg",
  },
];

function HomePage() {
  const nav = useNavigate();
  return (
    <div style={{ minHeight: "100vh", padding: "40px 20px" }}>
      <main
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          background: "rgba(255,255,255,0.86)",
          borderRadius: 24,
          padding: 24,
          boxShadow: "0 18px 40px rgba(15,23,42,.18)",
        }}
      >
        <section style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ fontSize: 40, marginBottom: 8 }}>악기 쇼핑몰</h1>
          <p>기타 · 피아노 · 드럼을 한 곳에서!</p>
          <button
            onClick={() => nav("/products")}
            style={{
              marginTop: 16,
              padding: "14px 32px",
              borderRadius: 999,
              border: "none",
              background: "linear-gradient(135deg,#4f46e5,#3b82f6)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(59,130,246,.35)",
            }}
          >
            악기 둘러보기
          </button>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 20,
          }}
        >
          {categories.map((c) => (
            <div
              key={c.title}
              style={{
                border: "1px solid #eee",
                borderRadius: 12,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 4px 12px rgba(15,23,42,.08)",
              }}
            >
              <img
                src={c.image}
                alt={c.title}
                style={{ width: "100%", height: 160, objectFit: "cover" }}
              />
              <div style={{ padding: 12 }}>
                <h3 style={{ margin: "4px 0" }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: 14 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
export default HomePage;
