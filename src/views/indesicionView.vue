<template>
  <!-- Define un contenedor principal con un fondo gris claro, altura completa de la pantalla, 
       disposición en columna, un ancho máximo limitado, y centrado horizontalmente -->
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <!-- Define una cabecera con fondo azul, padding, texto blanco, 
         y distribución del contenido con espacio entre los elementos -->
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <!-- Texto estático que se mostrará en la cabecera -->
      <span>Mi esposa</span>
    </div>

    <!-- Componente que muestra el historial de mensajes del chat, 
         pasando la propiedad `messages` como atributo -->
    <ChatMessage :messages="messages" />

    <!-- Componente para enviar nuevos mensajes, 
         que emite un evento `send-message` cuando se envía un mensaje, 
         manejado por la función `onMessage` -->
    <MessageBox @send-message="onMessage" />
  </div>
</template>

<script setup lang="ts">
  // Importa los componentes necesarios para el chat -->
  import ChatMessage from '@/components/chat/chatMessage.vue'
  import MessageBox from '@/components/chat/messageBox.vue'
  
  //Importa un composable que maneja la lógica del chat -->
  import { useChat } from '@/composables/useChats'
  
  //Desestructura las propiedades y funciones del composable useChat -->
  const { messages, onMessage } = useChat()
</script>