<template>
  <h1>Hola {{ name }}!</h1>
  <hr />
  <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "@vue/reactivity";
export default {
  components: { HelloWorld },
  setup() {
    const name = ref("NodeCO");

    return { name };
  },
};
</script>
