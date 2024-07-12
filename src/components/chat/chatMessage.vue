<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in message" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ChatMessages } from '@/interfaces/chat-message.interface'
import ChatBubble from './chatBubble.vue'

interface Props {
  message: ChatMessages[]
}

defineProps<Props>()
</script>
