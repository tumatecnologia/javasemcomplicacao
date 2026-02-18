import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { checkTransactionId, saveTransaction } from '@/lib/supabase';
import { useAuth } from '@/lib/AuthContext';
import { Crown, Pix, Upload, ShieldCheck, Copy } from 'lucide-react';

export default function Premium() {
  const [codigo, setCodigo] = useState('');
  const [arquivo, setArquivo] = useState(null);
  const [verificando, setVerificando] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const copiarPix = () => {
    navigator.clipboard.writeText('18216074816');
    toast({ title: "Copiado!", description: "Chave PIX copiada para a área de transferência." });
  };

  const handleValidarCodigo = async (e) => {
    e.preventDefault();
    if (!codigo.trim()) {
      toast({ title: "Atenção", description: "Por favor, insira o código de ativação.", variant: "destructive" });
      return;
    }

    setVerificando(true);
    try {
      const isValid = await checkTransactionId(codigo);

      if (isValid) {
        await saveTransaction(codigo, user?.email, 'LIBERACAO_PREMIUM');
        toast({ title: "Acesso Total Liberado!", description: "Bem-vindo ao time Premium!" });
        navigate('/Inicio');
      } else {
        toast({ variant: "destructive", title: "Código Inválido", description: "Verifique o código e tente novamente." });
      }
    } catch (error) {
      toast({ variant: "destructive", title: "Erro na verificação" });
    } finally {
      setVerificando(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <div className="text-center mb-8">
        <Crown className="w-12 h-12 text-orange-500 mx-auto mb-2" />
        <h1 className="text-3xl font-extrabold text-slate-900">Upgrade para Premium</h1>
        <p className="text-slate-600">Libere todos os módulos, projetos e certificados.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Lado Esquerdo: Pagamento */}
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="text-lg">1. Realize o Pagamento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <span className="text-sm text-orange-800 uppercase font-bold tracking-wider">Valor do Plano</span>
              <div className="text-3xl font-black text-orange-600">R$ 150,00</div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Chave PIX (Celular):</label>
              <div className="flex gap-2">
                <Input value="18216074816" readOnly className="bg-slate-50 font-mono" />
                <Button variant="outline" size="icon" onClick={copiarPix}><Copy className="h-4 w-4" /></Button>
              </div>
            </div>

            <div className="pt-2">
              <label className="text-sm font-medium text-slate-700 block mb-2">2. Anexar Comprovante:</label>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 text-center hover:border-orange-300 transition-colors">
                <input 
                  type="file" 
                  id="comprovante" 
                  className="hidden" 
                  onChange={(e) => setArquivo(e.target.files[0])}
                />
                <label htmlFor="comprovante" className="cursor-pointer flex flex-col items-center gap-2">
                  <Upload className="text-slate-400" />
                  <span className="text-xs text-slate-500">
                    {arquivo ? arquivo.name : "Clique para selecionar a imagem"}
                  </span>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lado Direito: Ativação */}
        <Card className="border-slate-200 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ShieldCheck className="text-green-600" /> 3. Ativar Acesso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleValidarCodigo} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Código:</label>
                <Input
                  placeholder="Insira o código recebido"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                  className="text-center font-mono text-lg py-5 border-orange-200"
                />
              </div>
              <Button 
                className="w-full bg-orange-600 hover:bg-orange-700 py-6 text-lg font-bold"
                disabled={verificando}
              >
                {verificando ? "Validando..." : "LIBERAR ACESSO"}
              </Button>
              <p className="text-[10px] text-center text-slate-400 uppercase tracking-tighter">
                A liberação é imediata após a validação do código.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
