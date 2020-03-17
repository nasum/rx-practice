<template>
  <div>
    <Header />
    <Todo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Header from "./components/Header.vue";
import Todo from "./components/Todo.vue";

export default Vue.extend({
  components: {
    Header,
    Todo
  }
});
</script>
>
