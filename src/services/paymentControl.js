import { supabase } from "@/lib/supabase";

// Função para exibir alerta que some automaticamente
const exibirAlertaTemporizado = (mensagem) => {
  const alerta = document.createElement('div');
  
  Object.assign(alerta.style, {
    position: 'fixed',
    bottom: '100px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#d32f2f',
    color: 'white',
    padding: '16px 24px',
    borderRadius: '12px',
    zIndex: '10000',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    transition: 'opacity 0.5s ease',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: '280px'
  });

  alerta.innerText = mensagem;
  document.body.appendChild(alerta);

  // Inicia o sumiço após 3 segundos
  setTimeout(() => {
    alerta.style.opacity = '0';
    setTimeout(() => {
      if (document.body.contains(alerta)) {
        document.body.removeChild(alerta);
      }
    }, 500);
  }, 3000);
};

export const isLessonFree = (lessonId) => {
  // Módulos 1 e 2 (IDs de aula 1 a 20)
  const isFree = lessonId <= 20;
  
  if (!isFree) {
    exibirAlertaTemporizado("Este módulo requer versão Premium (R$ 50,00)");
  }
  
  return isFree;
};

export const checkPremiumStatus = async (email) => {
  if (!email) return { data: false };

  const { data, error } = await supabase
    .from("transacoes_premium")
    .select("*")
    .eq("email_usuario", email);

  if (data && data.length > 0) return { data: true };
  
  return { data: false };
};

// Valor do PIX atualizado conforme solicitado
export const VALOR_PIX = "50.00";