<template>
  <div id="app">
    <Header />
    <BusinessItems />
  </div>
</template>

<script>
import Header from "./components/Header";
import BusinessItems from "./components/BusinessItems";

export default {
  name: "app",
  components: {
    Header,
    BusinessItems
  }
};
</script>

<style>
</style>
