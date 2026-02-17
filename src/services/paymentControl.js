const ADMIN_ID = "18216074816";

export const checkPremiumStatus = (user) => {
  if (user.id === ADMIN_ID || user.email === "seu-email-admin@exemplo.com") {
    return true;
  }
  return user.isPremium || false;
};

// Nova regra: aulas <= 20 são gratuitas
export const isLessonFree = (lessonId) => {
  return lessonId <= 20;
};

export const generatePremiumCode = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let code = "";
  for (let i = 0; i < 4; i++) code += numbers.charAt(Math.floor(Math.random() * numbers.length));
  for (let i = 0; i < 4; i++) code += letters.charAt(Math.floor(Math.random() * letters.length));
  return code; // Ex: 1234ABCD
};
