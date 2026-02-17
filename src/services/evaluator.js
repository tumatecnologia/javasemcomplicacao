export const evaluateExercise = (userAnswer, correctAnswer, type) => {
  if (!userAnswer) return 0;
  
  const normalizedUser = userAnswer.trim().toLowerCase().replace(/\s+/g, ' ');
  const normalizedCorrect = correctAnswer.trim().toLowerCase().replace(/\s+/g, ' ');

  if (type === 'completar') {
    // Comparação exata para completar código
    return normalizedUser === normalizedCorrect ? 10 : 0;
  } else {
    // Para escrever o código (write_code), verificamos palavras-chave essenciais
    // Dividimos a resposta esperada em termos obrigatórios
    const essentialTerms = normalizedCorrect.split(' ');
    let matches = 0;
    
    essentialTerms.forEach(term => {
      if (normalizedUser.includes(term)) matches++;
    });

    const score = (matches / essentialTerms.length) * 10;
    return score;
  }
};

export const calculateAverage = (scores) => {
  if (scores.length === 0) return 0;
  const sum = scores.reduce((a, b) => a + b, 0);
  return sum / scores.length;
};
