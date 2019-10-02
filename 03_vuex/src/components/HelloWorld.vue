<template>
  <div class="hello">
    <h2>计数：{{count}}</h2>
    <button class="btn" @click="increment">加1</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("counter");

export default {
  name: "HelloWorld",
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapActions(["increment"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 30px;
}

.btn {
  width: 120px;
  height: 48px;
  background: blueviolet;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
</style>
