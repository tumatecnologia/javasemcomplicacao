import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

// Helper para criar URL (já que seu config usa nomes de páginas)
const createPageUrl = (pageName) => `/${pageName}`;

export default function Layout({ children, currentPageName }) {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

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

  if (currentPageName === "Login") {
    return <div className="min-h-screen bg-slate-50">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/Inicio" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-slate-900 hidden sm:block">
                Java <span className="text-orange-500">sem Complicações</span>
              </span>
            </Link>

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

            <div className="flex items-center gap-3">
              {user && (
                <div className="hidden sm:flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs text-slate-500 leading-none">Conectado</p>
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
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden border-t bg-white p-4 space-y-1">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.page}
                to={createPageUrl(item.page)}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-600"
              >
                <div className="flex items-center gap-3"><item.icon className="w-4 h-4" />{item.name}</div>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </div>
        )}
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">{children}</main>
    </div>
  );
}
