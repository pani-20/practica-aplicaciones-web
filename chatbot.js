const messages = document.getElementById('chat-messages')

function botMessage(text) {
  messages.innerHTML += `<div class="message bot">🤖 ${text}</div>`
  messages.scrollTop = messages.scrollHeight
}

function userMessage(text) {
  messages.innerHTML += `<div class="message user">🧑 ${text}</div>`
  messages.scrollTop = messages.scrollHeight
}

function sendMessage() {
  const input = document.getElementById('userInput')
  if (!input.value) return

  userMessage(input.value)
  const text = input.value.toLowerCase()
  input.value = ''

  setTimeout(() => respond(text), 400)
}

function quickOption(option) {
  respond(option)
}

function respond(text) {
  if (text.includes('hola') || text.includes('buenas')) {
    botMessage(
      'Hola 👋 Soy el asistente del Hotel Aurora Palace. ¿En qué puedo ayudarte?'
    )
  } else if (text.includes('check') || text.includes('horario')) {
    botMessage('🕒 Check-in desde las 14:00 y check-out hasta las 12:00.')
  } else if (
    text.includes('wifi') ||
    text.includes('parking') ||
    text.includes('servicios')
  ) {
    botMessage(
      'Disponemos de wifi gratuito, parking privado (10€/día), piscina, spa, gimnasio y restaurante.'
    )
  } else if (text.includes('habitacion') || text.includes('precio')) {
    botMessage(
      '🛏 Standard desde 80€, ✨ Premium desde 120€, 👑 Deluxe desde 180€. Cancelación gratuita hasta 48h antes.'
    )
  } else if (
    text.includes('recomendacion') ||
    text.includes('hacer') ||
    text.includes('cenar')
  ) {
    botMessage(
      'Te recomendamos la playa cercana, el paseo marítimo y restaurantes locales como El Faro.'
    )
  } else if (text.includes('recepcion') || text.includes('persona')) {
    botMessage(
      '📞 Contacta con recepción en el 900 123 456. Un recepcionista te atenderá en breve.'
    )
  } else {
    botMessage(
      'Lo siento 😕 No he entendido tu pregunta. Puedes preguntar por servicios, habitaciones, recomendaciones o hablar con recepción.'
    )
  }
}

botMessage(
  '¡Hola! Soy el asistente virtual del Hotel Aurora Palace 🤖 ¿En qué puedo ayudarte?'
)
