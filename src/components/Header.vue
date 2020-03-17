<template>
  <header>todo count: {{ count }}</header>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("header");

export default Vue.extend({
  name: "Header",
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapActions(["initialize"])
  },
  mounted() {
    this.initialize();
  }
});
</script>
>
