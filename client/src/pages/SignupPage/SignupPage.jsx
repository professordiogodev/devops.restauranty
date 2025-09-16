import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../services/auth.service";


// Backend expects: name, surname, email, address, phoneNumber, password
export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await authService.signup({
        name: form.firstName.trim(),
        surname: form.lastName.trim(),
        email: form.email.trim(),
        address: form.address.trim(),
        phoneNumber: form.phone.trim(),
        password: form.password,
      });
      navigate("/login");
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Sign up failed. Please try again.";
      setError(msg);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-page" style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Sign Up</h1>

      <form onSubmit={onSubmit} className="form"
            style={{ maxWidth: 680, margin: "0 auto", display: "grid", gap: "0.75rem" }}>
        <label>First name
          <input name="firstName" value={form.firstName} onChange={onChange} required />
        </label>

        <label>Last name
          <input name="lastName" value={form.lastName} onChange={onChange} required />
        </label>

        <label>Email
          <input type="email" name="email" value={form.email} onChange={onChange} required />
        </label>

        <label>Password
          <input type="password" name="password" value={form.password} onChange={onChange} required minLength={8} />
        </label>

        <label>Address
          <input name="address" value={form.address} onChange={onChange} />
        </label>

        <label>Phone
          <input name="phone" value={form.phone} onChange={onChange} />
        </label>

        {error && <p style={{ color: "#c00", marginTop: "0.5rem" }}>{error}</p>}

        <button type="submit" disabled={busy} style={{ padding: "0.6rem 1rem" }}>
          {busy ? "Creating account…" : "Create account"}
        </button>

        <p style={{ marginTop: "0.5rem" }}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
