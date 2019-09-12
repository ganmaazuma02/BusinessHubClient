<template>
  <div>
    <b-jumbotron header="Business Hub" lead="A place where every business is connected">
      <b-nav-form @submit="onSearch">
        <b-form-input class="mr-sm-2" placeholder="Search Business" v-model="search" name="search"></b-form-input>
        <b-button class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
    </b-jumbotron>

    <b-container>
      <b-row>
        <BusinessItem :business="business" v-for="business in allBusinesses" :key="business.href" />
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
  data() {
    return {
      search: ""
    };
  },
  methods: {
    ...mapActions(["fetchBusinesses", "searchBusinesses"]),
    onSearch(e) {
      e.preventDefault();
      this.searchBusinesses(this.search);
    }
  },
  computed: mapGetters(["allBusinesses"]),
  created() {
    this.fetchBusinesses();
  }
};
</script>

<style>
</style>