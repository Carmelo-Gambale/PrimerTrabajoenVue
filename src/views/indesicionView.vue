<script setup lang="ts">
import ChatMessage from '@/components/chat/chatMessage.vue'
import messageBox from '@/components/chat/messageBox.vue'
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- chatmessage -->
    <ChatMessage />

    <!-- MessageBox -->

    <messageBox />
  </div>
</template>
