cat <<'EOF' > src/pages/Premium.jsx
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Tesseract from 'tesseract.js';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/lib/AuthContext';
import { Loader2, CheckCircle2, ShieldCheck } from "lucide-react";

const PremiumPage = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activatedCode, setActivatedCode] = useState('');

  const processOCR = async () => {
    if (!file) return;
    if (!user) {
      toast({ title: "Erro", description: "Você precisa estar logado.", variant: "destructive" });
      return;
    }
    
    setLoading(true);
    setProgress(0);
    
    try {
      // 1. Executa o OCR no comprovante
      const { data: { text } } = await Tesseract.recognize(file, 'por', {
        logger: m => { if (m.status === 'recognizing') setProgress(Math.round(m.progress * 100)); }
      });

      const lowerText = text.toLowerCase();
      
      // 2. Buscar ID da Transação (Padrão Pix/Banco)
      const idMatch = text.match(/[A-Z0-9]{15,}/); 
      const transactionId = idMatch ? idMatch[0] : "ID-" + Date.now();

      // 3. Verificar Duplicidade no Supabase
      const { data: existing } = await supabase
        .from('transacoes_premium')
        .select('id')
        .eq('transaction_id', transactionId)
        .single();

      if (existing) {
        throw new Error("Este comprovante já foi utilizado para ativar outra conta.");
      }

      // 4. Validar Nome (Suas variações salvas) e Valor
      const names = ["gustavo santos ribeiro", "gustavo s ribeiro"];
      const hasGustavo = names.some(n => lowerText.includes(n));
      
      const amountRaw = text.replace(/\./g, "").replace(",", ".");
      const amountMatch = amountRaw.match(/(\d+\.\d{2})/);
      const amount = amountMatch ? parseFloat(amountMatch[0]) : 0;

      if (hasGustavo && amount >= 150) {
        const num = Math.random().toString().slice(2, 6);
        const alpha = Math.random().toString(36).substring(2, 6).toUpperCase();
        const newCode = `${num}${alpha}`;

        // 5. Salvar Transação e Ativar Premium
        const { error: saveError } = await supabase
          .from('transacoes_premium')
          .insert({
            transaction_id: transactionId,
            user_email: user.email,
            codigo_gerado: newCode,
            valor: amount
          });

        if (saveError) throw saveError;

        // Atualizar o status do usuário (se você tiver essa coluna na tabela de perfis)
        await supabase.from('usuarios').update({ is_premium: true }).eq('email', user.email);
        
        setActivatedCode(newCode);
        toast({ title: "Premium Ativado!", description: "Sua conta agora é Premium!" });
      } else {
        throw new Error("Comprovante inválido. Verifique o favorecido (Gustavo S Ribeiro) e o valor (R$ 150,00).");
      }
    } catch (error) {
      toast({ title: "Erro na Validação", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 max-w-xl space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Torne-se Premium</h1>
        <p className="text-slate-500">Acesso vitalício a todos os módulos e certificados.</p>
      </div>

      <Card className="border-2 border-orange-100 shadow-xl">
        <CardHeader className="bg-orange-50/50">
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="text-orange-600" /> Ativação Automática
          </CardTitle>
          <CardDescription>
            Faça um PIX de <strong>R$ 150,00</strong> para <strong>Gustavo Santos Ribeiro</strong> e envie o print do comprovante abaixo.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Input 
              id="picture" 
              type="file" 
              accept="image/*" 
              onChange={(e) => setFile(e.target.files[0])}
              className="cursor-pointer"
            />
          </div>

          {loading && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span>Lendo comprovante...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}

          {activatedCode && (
            <div className="p-6 bg-green-50 border-2 border-dashed border-green-200 rounded-2xl text-center animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-green-600 font-medium">Acesso Liberado!</p>
              <p className="text-2xl font-black text-green-700">{activatedCode}</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full h-12 text-lg bg-orange-600 hover:bg-orange-700" 
            onClick={processOCR} 
            disabled={loading || !file}
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : "Validar Agora"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PremiumPage;
EOF