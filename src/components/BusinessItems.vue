<template>
  <div>
    <b-jumbotron header="Business Hub" lead="A place where every business is connected"></b-jumbotron>
    <b-container>
      <b-row>
        <BusinessItem /> <!-- Going to add v-for here -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BusinessItem from "./BusinessItem";
export default {
  name: "BusinessItems",
  components: {
    BusinessItem
  }
};
</script>

<style>
</style>