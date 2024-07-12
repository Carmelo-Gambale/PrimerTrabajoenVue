
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- chatmessage -->
    <ChatMessage :messages="messages"/>

    <!-- MessageBox -->

    <messageBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessage from '@/components/chat/chatMessage.vue'
import messageBox from '@/components/chat/messageBox.vue'
import type { ChatMessages } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';




const messages = ref<ChatMessages[]>([

{
  id:new Date().getTime(),
  message: 'Hola mundo',
  itsMine:true,
},
{
  id:new Date().getTime() +1,
  message: '¿Queres salir a tomar un cafe?',
  itsMine:true,
},
{
  id:new Date().getTime(),
  message: 'Hola mundo',
  itsMine:false,
  image:"https://yesno.wtf/assets/no/6-4bf0a784c173f70a0cab96efd9ff80c9.gif"
},



]);

</script>

