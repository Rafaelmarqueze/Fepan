"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import AdminLeads from "../components/AdminLeads/AdminLeads";
import AdminPurchases from "../components/AdminPurchases/AdminPurchases";
import AdminProducts from "../components/AdminProducts/AdminProducts";
import AdminReports from "../components/AdminReports/AdminReports";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("reports");
  const [loading, setLoading] = useState(false);

  const [feedbackModal, setFeedbackModal] = useState({
    open: false,
    title: "",
    message: "",
    isError: false
  });

  const closeFeedback = () => setFeedbackModal({ ...feedbackModal, open: false });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("adminToken", data.token);
        setIsAuthenticated(true);
      } else {
        setFeedbackModal({
          open: true,
          title: "Falha no Acesso",
          message: data.message || "Usuário ou senha incorretos.",
          isError: true
        });
      }
    } catch (err) {
      setFeedbackModal({
        open: true,
        title: "Erro de Servidor",
        message: "Não foi possível conectar ao banco de dados.",
        isError: true
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
  };

  return (
    <>
      {/* Modal de Feedback */}
      {feedbackModal.open && (
        <ModalOverlay onClick={closeFeedback}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3 style={{ color: feedbackModal.isError ? "#b90315" : "#25D366" }}>
              {feedbackModal.title}
            </h3>
            <p>{feedbackModal.message}</p>
            <div className="actions" style={{ marginTop: '20px' }}>
              
              <button
                onClick={closeFeedback}
                style={{
                  padding: '10px 25px',
                  backgroundColor: '#e86f2d',
                  color: '#111111',
                  border: 'none', 
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Fechar
              </button>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}

      {!isAuthenticated ? (
        <AdminContainer>
          <AdminHeader>
            <AdminTitle>Acesso Admin</AdminTitle>
          </AdminHeader>
          <LoginForm onSubmit={handleLogin}>
            <LoginInput
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <LoginInput
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <LoginButton type="submit" disabled={loading}>
              {loading ? "Autenticando..." : "Entrar"}
            </LoginButton>
          </LoginForm>
        </AdminContainer>
      ) : (
        <AdminWrapper>
          <Sidebar>
            <Logo>BRUTTUS</Logo>
            <SidebarButton active={activeTab === "reports"} onClick={() => setActiveTab("reports")}>Dashboard</SidebarButton>
            <SidebarButton active={activeTab === "leads"} onClick={() => setActiveTab("leads")}>Leads</SidebarButton>
            <SidebarButton active={activeTab === "purchases"} onClick={() => setActiveTab("purchases")}>Compras</SidebarButton>
            <SidebarButton active={activeTab === "products"} onClick={() => setActiveTab("products")}>Produtos</SidebarButton>
            <LogoutButtonSidebar onClick={handleLogout}>Sair</LogoutButtonSidebar>
          </Sidebar>
          <Content>
            {activeTab === "reports" && <AdminReports />}
            {activeTab === "leads" && <AdminLeads />}
            {activeTab === "purchases" && <AdminPurchases />}
            {activeTab === "products" && <AdminProducts />}
          </Content>
        </AdminWrapper>
      )}
    </>
  );
}


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: #fffaf0;
  padding: 30px;
  border-radius: 16px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 18px 50px rgba(17, 17, 17, 0.28);
  h3 { margin: 0 0 15px 0; font-size: 22px; }
  p { color: #6b625a; margin: 0; line-height: 1.5; }
`;

const AdminContainer = styled.div`
  min-height: 100vh;
  background: #111111;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AdminHeader = styled.div`
  width: min(100%, 440px);
  margin: 0 auto 24px;
  text-align: center;
`;

const AdminTitle = styled.h1`
  margin: 0;
  color: #fff7e8;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 32px;
  letter-spacing: 0.04em;
`;

const LoginForm = styled.form`
  background: #fff7e8;
  padding: 36px;
  border-radius: 16px;
  width: min(100%, 440px);
  margin: 0 auto;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LoginInput = styled.input`
  padding: 14px 16px;
  border: 1px solid #e4d6c0;
  border-radius: 8px;
  font-size: 16px;
  background: #fffdf8;
  color: #2c1810;
  &:focus { outline: 2px solid #e86f2d; border-color: #e86f2d; }
`;

const LoginButton = styled.button`
  padding: 14px;
  background: #e86f2d;
  color: #111111;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:disabled { background: #c7b8a3; cursor: not-allowed; }
  &:hover:not(:disabled) { background: #f3d59a; }
`;

const AdminWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #fff7e8;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  flex: 0 0 250px;
  background: #111111;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 28px 20px;

  @media (max-width: 768px) {
    width: 100%;
    flex: 0 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 14px;
  }
`;

const Logo = styled.div`
  color: #f3d59a;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 28px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 4px;
  }
`;

const SidebarButton = styled.button`
  background: ${(props) => (props.active ? "#e86f2d" : "transparent")};
  color: ${(props) => (props.active ? "#111111" : "#fff7e8")};
  border: none;
  padding: 12px;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.2s ease, color 0.2s ease;
  &:hover { background: #f3d59a; color: #111111; }
`;

const LogoutButtonSidebar = styled.button`
  margin-top: auto;
  background: #2c1810;
  color: #fff7e8;
  border: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  &:hover { background: #6b3e26; }

  @media (max-width: 768px) {
    margin: 0 0 0 auto;
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
  padding: clamp(16px, 3vw, 36px);
  background: #fff7e8;
`;