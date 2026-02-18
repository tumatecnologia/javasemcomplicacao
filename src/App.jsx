import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import Layout from './Layout';
import { PAGES } from './pages.config';
import { Toaster } from "@/components/ui/toaster";

// Componente para proteger rotas
const PrivateRoute = ({ children, pageName }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="flex h-screen items-center justify-center font-mono">Carregando...</div>;
  if (!user) return <Navigate to="/Login" replace />;

  return <Layout currentPageName={pageName}>{children}</Layout>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rota Pública: Login */}
          <Route path="/Login" element={
            <Layout currentPageName="Login">
              <PAGES.Login />
            </Layout>
          } />

          {/* Rotas Privadas (Mapeadas do seu PAGES config) */}
          <Route path="/Inicio" element={<PrivateRoute pageName="Inicio"><PAGES.Inicio /></PrivateRoute>} />
          <Route path="/Progress" element={<PrivateRoute pageName="Progress"><PAGES.Progress /></PrivateRoute>} />
          <Route path="/Premium" element={<PrivateRoute pageName="Premium"><PAGES.Premium /></PrivateRoute>} />
          <Route path="/Curso/:id" element={<PrivateRoute pageName="Curso"><PAGES.Curso /></PrivateRoute>} />
          
          {/* Rota de Curso sem ID (Redireciona para a aula 1 ou Inicio) */}
          <Route path="/Curso" element={<Navigate to="/Inicio" replace />} />

          {/* Redirecionamento Padrão */}
          <Route path="/" element={<Navigate to="/Login" replace />} />
        </Routes>
      </Router>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
