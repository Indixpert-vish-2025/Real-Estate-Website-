import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSave, setShowSave] = useState(false);
  const [tempUser, setTempUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        setError("Invalid email or password");
        return;
      }

      setTempUser({ email });
      setShowSave(true);
    } else {
      const exists = users.find((u) => u.email === email);
      if (exists) {
        setError("Account already exists. Please sign in.");
        return;
      }

      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      setTempUser({ email });
      setShowSave(true);
    }
  };

  const saveLogin = () => {
    localStorage.setItem("currentUser", JSON.stringify(tempUser));
    navigate("/");
  };

  const skipSave = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* MAIN CARD */}
      <div
        style={{
          width: "380px",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* TOP BAR */}
        <div
          style={{
            background: "var(--primary)",
            color: "#fff",
            padding: "16px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          {isLogin ? "Sign In" : "Create Account"}
        </div>

        {/* FORM */}
        <div style={{ padding: "24px" }}>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />

            {error && (
              <p style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}>
                {error}
              </p>
            )}

            <button style={btnStyle}>
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* TOGGLE */}
          <p style={{ textAlign: "center", fontSize: "13px", marginTop: "14px" }}>
            {isLogin ? (
              <>
                New here?{" "}
                <span style={linkStyle} onClick={() => setIsLogin(false)}>
                  Create account
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span style={linkStyle} onClick={() => setIsLogin(true)}>
                  Sign in
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* SAVE LOGIN MODAL */}
      {showSave && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h3 style={{ marginBottom: "10px" }}>Save login?</h3>
            <p style={{ fontSize: "13px", color: "#666", marginBottom: "20px" }}>
              So you don’t have to sign in again.
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={btnStyle} onClick={saveLogin}>
                Save
              </button>
              <button
                style={{
                  ...btnStyle,
                  background: "#ddd",
                  color: "#333",
                }}
                onClick={skipSave}
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ===== STYLES ===== */

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "14px",
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  background: "var(--primary)",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
};

const linkStyle = {
  color: "var(--primary)",
  cursor: "pointer",
  fontWeight: 600,
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalStyle = {
  background: "#fff",
  padding: "24px",
  borderRadius: "6px",
  width: "300px",
  textAlign: "center",
};

export default SignIn;
