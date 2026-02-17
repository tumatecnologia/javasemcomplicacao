import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "./utils"; 
import { supabase } from "@/lib/supabase";
import { 
  Coffee, BookOpen, Trophy, CreditCard, Menu, X, 
  Home, LogOut, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { name: "Início", page: "Inicio", icon: Home },
  { name: "Curso", page: "Curso", icon: BookOpen },
  { name: "Meu Progresso", page: "Progress", icon: Trophy },
  { name: "Premium", page: "Premium", icon: CreditCard },
];

export default function Layout({ children, currentPageName }) {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Busca o usuário inicial
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    // Escuta mudanças (login/logout) para atualizar o cabeçalho em tempo real
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/Login');
  };

  // 1. Se for a página de Login, renderiza apenas o conteúdo (sem header/menus)
  if (currentPageName === "Login") {
    return (
      <div className="min-h-screen bg-slate-50">
        {children}
      </div>
    );
  }

  // 2. Layout padrão para as outras páginas
  return (
    <div className="min-h-screen bg-slate-50">
      <style>{`
        :root {
          --java-orange: #F89820;
          --java-blue: #007396;
          --java-dark: #0D1117;
          --java-light: #F6F8FA;
        }
      `}</style>
      
      {/* Barra de Navegação Superior */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link to={createPageUrl("Inicio")} className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-slate-900 hidden sm:block">
                Java <span className="text-orange-500">sem Complicações</span>
              </span>
            </Link>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map(item => {
                const Icon = item.icon;
                const isActive = currentPageName === item.page;
                return (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
                      ${isActive 
                        ? "bg-orange-50 text-orange-600" 
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Área do Usuário / Botão Logout */}
            <div className="flex items-center gap-3">
              {user && (
                <div className="hidden sm:flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs text-slate-500 leading-none">Conectado como</p>
                    <p className="text-sm font-semibold text-slate-900">{user.email}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleLogout}
                    className="text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl"
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              )}
              
              {/* Botão Menu Mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-slate-100 text-slate-600"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Aberto */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white p-4 space-y-1 animate-in fade-in slide-in-from-top-2">
            {NAV_ITEMS.map(item => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all
                    ${currentPageName === item.page
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-600 hover:bg-slate-50"}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
            
            {user && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-3 mt-2 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 border-t border-slate-50"
              >
                <LogOut className="w-4 h-4" />
                Sair da conta
              </button>
            )}
          </div>
        )}
      </header>

      {/* Conteúdo Principal da Página */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>
    </div>
  );
}