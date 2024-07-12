// Importa 'ref' desde Vue para crear referencias reactivas
import { ref } from 'vue'
// Importa los tipos 'ChatMessage' y 'Yesnoresponse' desde sus respectivos archivos de interfaces
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import type { Yesnoresponse } from '@/interfaces/yes-no.Response'
import { sleep } from '@/helpers/sleep'
// import { sleep } from '@/helpers/sleep';  // Importación comentada para una posible función de espera

// Exporta una función composable llamada 'useChat'
export const useChat = () => {
  // Crea una referencia reactiva para almacenar los mensajes del chat, inicializada como un array vacío
  const messages = ref<ChatMessage[]>([])

  // Función asíncrona para obtener una respuesta desde una API externa
  const getHerResponse = async () => {
    // Realiza una petición fetch a la API
    const resp = await fetch('https://yesno.wtf/api')
    // Convierte la respuesta en formato JSON y la tipa como 'Yesnoresponse'
    const data = (await resp.json()) as Yesnoresponse
    // Retorna los datos obtenidos
    return data
  }

  // Función asíncrona para manejar el envío de un nuevo mensaje
  const onMessage = async (text: string) => {
    // Si el texto está vacío, no hace nada y retorna
    if (text.length === 0) return

    // Añade un nuevo mensaje a la referencia 'messages' indicando que es del usuario (itsMine: true)
    messages.value.push({
      id: new Date().getTime(),  // Genera un ID basado en el tiempo actual
      itsMine: true,             // Indica que el mensaje es del usuario
      message: text              // Contenido del mensaje
    })

    // Si el mensaje no termina con un signo de interrogación, no hace nada más y retorna
    if (!text.endsWith('?')) return

    await sleep(1.5);  // Llamada comentada para una función de espera

    // Obtiene una respuesta desde la API
    const { answer, image } = await getHerResponse()

    // Añade la respuesta obtenida a los mensajes, indicando que no es del usuario (itsMine: false)
    messages.value.push({
      id: new Date().getTime(),  // Genera un nuevo ID basado en el tiempo actual
      itsMine: false,            // Indica que el mensaje no es del usuario
      message: answer,           // Contenido de la respuesta
      image: image               // Imagen asociada a la respuesta
    })
  }

  // Retorna las propiedades y métodos que serán utilizados fuera de este composable
  return {
    // Propiedades
    messages,

    // Métodos
    onMessage
  }
}

