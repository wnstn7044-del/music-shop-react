import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const nav = useNavigate();
  const onSubmit = (d) => {
    alert(`${d.name}님 회원가입 완료`);
    nav("/login");
  };
  return (
    <main
      style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: 360,
          padding: 28,
          borderRadius: 16,
          background: "#fff",
          boxShadow: "0 8px 24px rgba(0,0,0,.12)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>회원가입</h2>
        <input
          placeholder="이름"
          {...register("name", { required: true })}
          style={{ width: "100%", padding: 12, marginBottom: 4 }}
        />
        {errors.name && <small>이름을 입력해 주세요</small>}
        <input
          placeholder="이메일"
          {...register("email", { required: true })}
          style={{ width: "100%", padding: 12, margin: "8px 0 4px" }}
        />
        {errors.email && <small>이메일을 입력해 주세요</small>}
        <input
          type="password"
          placeholder="비밀번호"
          {...register("password", { required: true })}
          style={{ width: "100%", padding: 12, margin: "8px 0 12px" }}
        />
        {errors.password && <small>비밀번호를 입력해 주세요</small>}
        <button
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 999,
            border: "none",
            background: "linear-gradient(135deg,#4f46e5,#3b82f6)",
            color: "#fff",
            fontWeight: "bold",
            marginTop: 8,
          }}
        >
          회원가입
        </button>
      </form>
    </main>
  );
}
export default RegisterPage;
