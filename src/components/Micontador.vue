<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Sección principal del componente -->
  <section>
    <!-- Muestra el valor del contador -->
    <h3>Counter: {{ counter }}</h3>
    <!-- Muestra el valor cuadrado del contador -->
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <!-- Botón para incrementar el contador -->
      <button class="btn" @click="counter++">+1</button>
      <!-- Botón para decrementar el contador -->
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Importa `useCounter` desde el archivo de composables
import { useCounter } from '../composables/useCounter'
// Define una interfaz para las propiedades
interface Props {
  value: number
}

// Define las propiedades usando la interfaz `Props`
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// Usa `useCounter` pasando un valor inicial de 10 y desestructura el resultado en `counter` y `squareCounter`
const { counter, squareCounter } = useCounter(10)

// import { computed, ref } from 'vue';

// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>
