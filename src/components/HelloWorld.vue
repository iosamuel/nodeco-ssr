<template>
  <div v-if="show">
    <h3>Hola, {{ text }}!</h3>
    <input type="text" v-model="text" />
  </div>
  <div v-else>
    <h3>Not show!</h3>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const text = ref("mundo");
    const show = ref(true);

    if (import.meta.env.SSR) {
      show.value = false;
    }

    setTimeout(() => (show.value = true), 2000);

    return { text, show };
  },
};
</script>
