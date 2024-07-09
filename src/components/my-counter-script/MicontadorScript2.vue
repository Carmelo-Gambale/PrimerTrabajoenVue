<template>
  <section>
    <!-- Muestra el valor actual del contador -->
    <h3>Counter: {{ counter }}</h3>
    <!-- Muestra el cuadrado del valor actual del contador -->
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <!-- Botón para incrementar el contador en 1 -->
      <button @click="counter++">+1</button>
      <!-- Botón para decrementar el contador en 1 -->
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>
<style></style>
