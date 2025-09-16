// client/src/services/auth.service.js
import axios from "axios";

class AuthService {
  constructor() {
    // All requests use relative paths like "/api/auth/login"
    // so they go via the Ingress/HAProxy under the same origin.
    this.api = axios.create({
      baseURL: "",
      withCredentials: false,
    });

    // Attach token automatically if present
    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${storedToken}`;
      }
      return config;
    });
  }

  // ---- Auth endpoints ----
  signup = (data) => this.api.post("/api/auth/signup", data);
  login = (data) => this.api.post("/api/auth/login", data);
  // usually GET /api/auth/verify
  verify = () => this.api.get("/api/auth/verify");
}

const authService = new AuthService();
export default authService;
