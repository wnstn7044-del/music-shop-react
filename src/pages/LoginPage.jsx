import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    login(email, pw);
    nav("/");
  };

  return (
    <main
      style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <form
        onSubmit={submit}
        style={{
          width: 360,
          padding: 28,
          borderRadius: 16,
          background: "#fff",
          boxShadow: "0 8px 24px rgba(0,0,0,.12)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>로그인</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          style={{ width: "100%", padding: 12, marginBottom: 10 }}
        />
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="비밀번호"
          style={{ width: "100%", padding: 12, marginBottom: 16 }}
        />
        <button
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 999,
            border: "none",
            background: "linear-gradient(135deg,#4f46e5,#3b82f6)",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          로그인
        </button>
      </form>
    </main>
  );
}
export default LoginPage;
