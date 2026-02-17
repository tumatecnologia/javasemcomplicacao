import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Tesseract from 'tesseract.js';
import { checkTransactionId, saveTransaction } from '@/lib/supabase';

const PremiumPage = () => {
  const { toast } = useToast();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activatedCode, setActivatedCode] = useState('');

  const processOCR = async () => {
    if (!file) return;
    setLoading(true);
    
    try {
      const { data: { text } } = await Tesseract.recognize(file, 'por', {
        logger: m => { if (m.status === 'recognizing') setProgress(Math.round(m.progress * 100)); }
      });

      const lowerText = text.toLowerCase();
      
      // 1. Buscar ID da Transação (Regex para padrões longos de banco)
      const idMatch = text.match(/[A-Z0-9]{15,}/); 
      const transactionId = idMatch ? idMatch[0] : "ID-" + Date.now();

      // 2. Verificar Duplicidade
      const alreadyExists = await checkTransactionId(transactionId);
      if (alreadyExists) {
        throw new Error("Este comprovante já foi utilizado.");
      }

      // 3. Validar Nome Gustavo e Valor >= 150
      const hasGustavo = lowerText.includes("gustavo s ribeiro") || lowerText.includes("gustavo santos ribeiro");
      const amountRaw = text.replace(/\./g, "").replace(",", ".");
      const amountMatch = amountRaw.match(/(\d+\.\d{2})/);
      const amount = amountMatch ? parseFloat(amountMatch[0]) : 0;

      if (hasGustavo && amount >= 150) {
        const num = Math.random().toString().slice(2, 6);
        const alpha = Math.random().toString(36).substring(2, 6).toUpperCase();
        const newCode = `${num}${alpha}`;

        // 4. Salvar no Supabase (Email fixo para teste, depois usaremos o do login)
        await saveTransaction(transactionId, "aluno@exemplo.com", newCode);
        
        setActivatedCode(newCode);
        toast({ title: "Premium Ativado!", description: "Código gerado com sucesso." });
      } else {
        throw new Error("Dados do comprovante não conferem (Nome ou Valor).");
      }
    } catch (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 max-w-xl">
      <Card>
        <CardHeader>
          <CardTitle>Ativação Premium</CardTitle>
          <CardDescription>Envie o comprovante de R$ 150,00 para Gustavo Santos Ribeiro</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
          {loading && <p className="text-sm text-center">Processando OCR: {progress}%</p>}
          {activatedCode && (
            <div className="p-4 bg-green-50 border border-green-200 rounded text-center">
              <p className="font-bold text-green-700">CÓDIGO: {activatedCode}</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={processOCR} disabled={loading || !file}>
            Validar Comprovante
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PremiumPage;
