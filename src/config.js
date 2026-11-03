export const siteConfig = {
    name: "Iago Nogueira Tarot",
    whatsapp: "5538998861089", 
    instagram: "https://instagram.com/",
    description: "Um espaço de acolhimento, autoconhecimento e conexão através do Tarot.",
  };
  
  export const whatsappLink = (message = "Olá! Gostaria de conhecer os atendimentos da Iago Nogueira Tarot.") => {
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  };