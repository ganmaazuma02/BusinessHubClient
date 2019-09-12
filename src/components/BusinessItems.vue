<template>
  <div>
    <b-jumbotron header="Business Hub" lead="A place where every business is connected"></b-jumbotron>
    <b-container>
      <b-row>
        <BusinessItem :business="business" v-for="business in allBusinesses" :key="business.guid" />
        <!-- Going to add v-for here -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BusinessItem from "./BusinessItem";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "BusinessItems",
  components: {
    BusinessItem
  },
  methods: {
    ...mapActions(["fetchBusinesses"])
  },
  computed: mapGetters(["allBusinesses"]),
  created() {
    this.fetchBusinesses();
  }
};
</script>

<style>
</style>