import jwt from "jsonwebtoken";

export function requireAdmin(req, res) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error("JWT_SECRET não está configurado");
    res.status(500).json({ error: "Autenticação não configurada" });
    return false;
  }

  const authorization = req.headers.authorization;
  const [scheme, token] = authorization?.split(" ") || [];
  if (scheme !== "Bearer" || !token) {
    res.status(401).json({ error: "Autenticação necessária" });
    return false;
  }

  try {
    const payload = jwt.verify(token, secret);
    if (typeof payload === "string" || payload.role !== "admin") {
      res.status(403).json({ error: "Acesso não autorizado" });
      return false;
    }

    return true;
  } catch {
    res.status(401).json({ error: "Sessão inválida ou expirada" });
    return false;
  }
}
