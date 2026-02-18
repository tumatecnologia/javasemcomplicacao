import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, User } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState(''); // Estado para o nome
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
        // Cadastro com metadados de nome
        const { error } = await supabase.auth.signUp({ 
          email, 
          password,
          options: { data: { display_name: nome } } 
        });
        if (error) throw error;
        toast({ title: "Sucesso!", description: "Verifique seu email para confirmar o cadastro." });
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
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">Java sem Complicação</h2>
        
        <form onSubmit={handleAuth} className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <input
                type="text"
                placeholder="Seu Nome Completo"
                className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              className="w-full rounded-md border border-gray-300 p-2 pr-10 focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-400">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <button className="w-full rounded-md bg-blue-600 p-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50">
            {loading ? 'Carregando...' : (isSignUp ? 'Criar Conta' : 'Entrar')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-sm text-blue-600 hover:underline">
            {isSignUp ? 'Já tem conta? Entre aqui' : 'Não tem conta? Cadastre-se'}
          </button>
        </div>
      </div>
    </div>
  );
}
