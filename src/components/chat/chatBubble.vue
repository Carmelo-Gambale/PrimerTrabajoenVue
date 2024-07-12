<template>
  <!-- Mostrar un mensaje de chat si es mío (itsMine es true) -->
  <div v-if="itsMine" class="flex justify-end">
    <!-- Contenedor del mensaje, con fondo azul claro y texto negro -->
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
  </div>

  <!-- Mostrar un mensaje de chat recibido si no es mío (itsMine es false) -->
  <div v-else class="flex">
    <!-- Contenedor del mensaje, con fondo gris claro y texto negro -->
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <!-- Mostrar el texto del mensaje, con mayúscula inicial -->
      <span class="capitalize">{{ message }}</span>
      <!-- Mostrar la imagen del mensaje, si existe -->
      <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Definir la interfaz Props, que contiene tres propiedades:
// - message: string (el texto del mensaje)
// - itsMine: boolean (si el mensaje es mío o no)
// - image?: string (la URL de la imagen del mensaje, opcional)
interface Props {
  message: string
  itsMine: boolean
  image?: string
}

// Definir la propiedad Props utilizando la función defineProps de Vue
defineProps<Props>()
</script>
