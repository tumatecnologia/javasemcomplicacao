import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { checkTransactionId, saveTransaction } from '@/lib/supabase';
import { useAuth } from '@/lib/AuthContext';
import { Crown, ShieldCheck, Info, Copy } from 'lucide-react';

export default function Premium() {
  const [codigo, setCodigo] = useState('');
  const [verificando, setVerificando] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Função para copiar PIX com alerta que some rápido
  const copiarPix = () => {
    navigator.clipboard.writeText('18216074816');
    toast({ 
      title: "Copiado!", 
      description: "Chave PIX copiada.",
      duration: 3000 // Some em 3 segundos
    });
  };

  const handleValidarCodigo = async (e) => {
    e.preventDefault();
    if (!codigo.trim()) return;

    setVerificando(true);
    try {
      const isValid = await checkTransactionId(codigo);
      if (isValid) {
        await saveTransaction(codigo, user?.email, 'ATIVACAO_DIRETA');
        toast({ 
          title: "Sucesso!", 
          description: "Acesso Premium liberado!",
          duration: 3000 
        });
        navigate('/Inicio');
      } else {
        // Erro vermelho: Agora com duração definida para SUMIR sozinho
        toast({ 
          variant: "destructive", 
          title: "Erro", 
          description: "Código inválido.",
          duration: 3000 // FORÇA o sumiço em 3 segundos
        });
      }
    } catch (error) {
      toast({ 
        variant: "destructive", 
        title: "Erro de conexão",
        duration: 3000 
      });
    } finally {
      setVerificando(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <div className="text-center mb-8">
        <Crown className="w-12 h-12 text-orange-500 mx-auto mb-2" />
        <h1 className="text-3xl font-extrabold text-slate-900 uppercase">Upgrade Premium</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="text-lg">1. Pagamento PIX</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <span className="text-xs font-bold text-orange-800 uppercase">Valor Único</span>
              <div className="text-3xl font-black text-orange-600">R$ 50,00</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Chave PIX (Celular):</label>
              <div className="flex gap-2">
                <Input value="18216074816" readOnly className="bg-slate-50 font-mono" />
                <Button variant="outline" size="icon" onClick={copiarPix}><Copy className="h-4 w-4" /></Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ShieldCheck className="text-green-600" /> 2. Ativação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleValidarCodigo} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold">Código:</label>
                <Input
                  placeholder="Digite seu código"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                  className="text-center font-mono py-5 border-orange-200"
                />
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 py-6 font-bold" disabled={verificando}>
                {verificando ? "Validando..." : "LIBERAR ACESSO"}
              </Button>
              <div className="text-center space-y-1">
                <p className="text-[11px] text-slate-500 uppercase font-bold tracking-tighter">
                  A liberação é imediata após a validação do código.
                </p>
                <p className="text-[11px] text-orange-600 font-bold uppercase tracking-tighter">
                  O seu código de validação Premium será enviado para o email cadastrado após a confirmação do pagamento.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}