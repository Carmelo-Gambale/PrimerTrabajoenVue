<template>
  <section>
    <!-- Muestra el valor actual del contador -->
    <h3>Counter: {{ counter }}</h3>
    <!-- Muestra el cuadrado del valor actual del contador -->
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <!-- Botón para incrementar el contador en 1 -->
      <button class="p-5 bg-gray-400 hover:bg-gray-700 rounded ml-5" @click="counter++">+1</button>
      <!-- Botón para decrementar el contador en 1 -->
      <button class="p-5 bg-gray-400 hover:bg-gray-700 rounded ml-5" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    // Define una propiedad 'value' de tipo Number requerida para inicializar el contador
    value: { type: Number, required: true }
  },

  setup(props) {
    // Crea una referencia reactiva 'counter' inicializada con el valor proporcionado
    const counter = ref(props.value)

    // Calcula el cuadrado del valor actual del contador de forma reactiva
    const squareCounter = computed(() => counter.value * counter.value)

    return {
      // Devuelve el contador y su cuadrado como propiedades reactivas para usar en el template
      counter,
      squareCounter
    }
  }
})
</script>
