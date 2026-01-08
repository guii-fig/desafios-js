function saudacaoBot(canal) {
  let correto
  switch(canal) {
    case "whatsapp":
      correto = "Ola, este e o WhatsappBot!"
    break
    
    case "telegram":
      correto = "Ola, este e o TelegramBot!"
    break
    
    case "webchat":
      correto = "Ola, este e o WebChatBot!"
    break
    
    default:
      correto = "Canal nao suportado"
  }
  
  return correto
    // TODO: Retorne a saudação correta para cada canal ou "Canal nao suportado" se não reconhecido
}

// Entrada do usuário
const canal = "email";

// Chama a função e imprime a resposta
console.log(saudacaoBot(canal));