<template>
  <div>
    <input type="text" v-model="todo" />
    <button @click="submit">add</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("todo");

export default Vue.extend({
  name: "Todo",
  data() {
    return {
      todo: ""
    };
  },
  computed: {
    ...mapState(["todos"])
  },
  methods: {
    ...mapActions(["initialize", "addTodo"]),
    submit() {
      this.addTodo(this.todo);
      this.todo = "";
    }
  },
  mounted() {
    this.initialize();
  }
});
</script>
>
