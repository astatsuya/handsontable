<template>
  <div id="app">
    <TableIndex/>
  </div>
</template>

<script>
import TableIndex from "./components/TableIndex.vue";

export default {
  name: "app",
  components: {
    TableIndex
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
