"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #fffaf0;
  border: 1px solid #eadcc5;
  border-radius: 14px;
  padding: clamp(16px, 2.5vw, 28px);
  box-shadow: 0 8px 24px rgba(44, 24, 16, 0.08);
`;

const SectionTitle = styled.h2`
  margin: 0 0 20px 0;
  color: #2c1810;
  font-size: 22px;
  border-bottom: 2px solid #e86f2d;
  padding-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;

  th {
    background: #f3d59a;
    padding: 12px;
    text-align: left;
    font-weight: bold;
    border-bottom: 2px solid #d9c7aa;
    color: #2c1810;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid #eee3d2;
  }

  tr:hover {
    background: #fff5e2;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #999;
`;

export default function AdminPurchases() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    try {
      const res = await fetch("/api/purchases");
      const data = await res.json();
      setPurchases(data || []);
    } catch (err) {
      console.error("Erro ao carregar compras:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("pt-BR");
  };

  return (
    <Container>
      <SectionTitle>Compras</SectionTitle>
      {loading ? (
        <EmptyState>Carregando compras...</EmptyState>
      ) : purchases.length === 0 ? (
        <EmptyState>Nenhuma compra registrada.</EmptyState>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>CNPJ</th>
              <th>Total</th>
              <th>Status</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.cnpj || "-"}</td>
                <td>R$ {Number(p.total).toFixed(2)}</td>
                <td>{p.status}</td>
                <td>{formatDate(p.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
