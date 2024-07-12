// Importa `ref` y `computed` desde Vue
import { ref, computed } from 'vue'

// Define y exporta una función `useCounter` que toma un valor inicial como argumento (por defecto 5)
export const useCounter = (initialValue: number = 5) => {
  // Crea una referencia reactiva `counter` inicializada con el valor `initialValue`
  const counter = ref(initialValue)
  // Define un valor computado `squareCounter` que es el cuadrado del valor de `counter`
  const squareCounter = computed(() => counter.value * counter.value)

  // Retorna un objeto con `counter` y `squareCounter` para que puedan ser usados fuera de esta función
  return {
    counter,
    squareCounter
  }
}
