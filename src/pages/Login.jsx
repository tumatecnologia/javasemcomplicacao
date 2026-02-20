import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        if (!nome.trim()) throw new Error("Por favor, digite seu nome.");
        
        const { error } = await supabase.auth.signUp({ 
          email, 
          password,
          options: { 
            data: { display_name: nome } 
          } 
        });
        if (error) throw error;
        toast({ title: "Conta criada!", description: "Agora você pode fazer login." });
        setIsSignUp(false); // Volta para tela de login após cadastrar
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/Inicio');
      }
    } catch (error) {
      toast({ variant: "destructive", title: "Erro", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 font-sans">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Java sem Complicação</h2>
          <p className="text-slate-500 text-sm mt-2">
            {isSignUp ? 'Crie sua conta para começar' : 'Entre para continuar seus estudos'}
          </p>
        </div>
        
        <form onSubmit={handleAuth} className="space-y-4">
          {isSignUp && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase ml-1">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="GUSTAVO SANTOS RIBEIRO"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase ml-1">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase ml-1">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-3 top-3 text-slate-400 hover:text-orange-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-slate-900 p-4 font-bold text-white hover:bg-orange-600 transition-colors shadow-lg active:scale-95 disabled:opacity-50"
          >
            {loading ? 'PROCESSANDO...' : (isSignUp ? 'CRIAR MINHA CONTA' : 'ACESSAR PLATAFORMA')}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-slate-100 pt-6">
          <button 
            onClick={() => setIsSignUp(!isSignUp)} 
            className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
          >
            {isSignUp ? 'Já possui uma conta? Clique para Entrar' : 'Novo por aqui? Crie sua conta grátis'}
          </button>
        </div>
      </div>
    </div>
  );
}
