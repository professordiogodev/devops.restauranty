// client/src/pages/SignupPage/index.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../../../../services/auth.service";  // NOTE: ../../ (two levels up)

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.firstName.trim(),
      surname: form.lastName.trim(),
      email: form.email.trim(),
      address: form.address.trim(),
      phoneNumber: form.phone.trim(),
      password: form.password,
    };

    try {
      await authService.signup(payload);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Sign up failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>

      <form onSubmit={handleSubmit} className="form" style={{ display:'grid', gap:12, maxWidth:520, margin:'0 auto' }}>
        <input name="firstName" placeholder="First name" value={form.firstName} onChange={onChange} required />
        <input name="lastName" placeholder="Last name" value={form.lastName} onChange={onChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
        <input name="address" placeholder="Address" value={form.address} onChange={onChange} required />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={onChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={onChange} required />
        <button type="submit">Create account</button>
      </form>

      <p style={{ textAlign: "center", marginTop: 12 }}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
