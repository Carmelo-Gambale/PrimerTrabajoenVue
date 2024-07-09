// Importa `useCounter` desde un archivo de composición y `defineComponent` desde Vue.
import { useCounter } from '@/composables/useCounter'
import { defineComponent } from 'vue'

// Define y exporta por defecto un componente de Vue.
export default defineComponent({
  // Especifica las propiedades del componente.
  props: {
    // `value` es una propiedad de tipo `Number` que es requerida.
    value: { type: Number, required: true }
  },
  // La función `setup` es parte de la API de composición de Vue y se usa para definir la lógica del componente utilizando `props`.
  setup(props) {
    // Llama a la función `useCounter` pasando `props.value` como argumento y desestructura el resultado en `counter` y `squareCounter`.
    const { counter, squareCounter } = useCounter(props.value)

    // Estas líneas están comentadas. Muestran una alternativa a la implementación de `useCounter` utilizando las funciones `ref` y `computed` de Vue para crear un contador reactivo (`counter`) y un valor computado (`squareCounter`) que es el cuadrado del contador.
    // const counter = ref(props.value);
    // const squareCounter = computed(() => counter.value * counter.value);

    // La función `setup` retorna un objeto que expone `counter` y `squareCounter` al template del componente, permitiendo su uso en la interfaz de usuario.
    return {
      counter,
      squareCounter
    }
  }
})
