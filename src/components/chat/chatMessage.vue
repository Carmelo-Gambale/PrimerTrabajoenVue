<!-- eslint-disable vue/no-parsing-error -->
<template>
  <!-- Este es el contenedor principal del componente, con un diseño flexbox y un padding de 4px -->
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <!-- Este es un contenedor que contiene los mensajes de chat, con un diseño flexbox y un espacio entre elementos de 2px -->
    <div class="flex flex-col space-y-2">
      <!-- Aquí se renderizan los mensajes de chat, utilizando un bucle v-for para iterar sobre el array de mensajes -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Importamos la interfaz ChatMessages desde el archivo interfaces/chat-message.interface
import type { ChatMessage } from '@/interfaces/chat-message.interface'

// Importamos el componente ChatBubble desde el archivo chatBubble.vue
import ChatBubble from './chatBubble.vue'
import { ref, watch } from 'vue'

// Definimos la interfaz Props, que contiene una propiedad message de tipo ChatMessages[]
interface Props {
  messages: ChatMessage[]
}

// Definimos la propiedad message utilizando la función defineProps de Vue
const { messages } = defineProps<Props>()

const chatRef = ref<HTMLDivElement | null>(null)

watch(messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth'
    })
  }, 100);
});
</script>
