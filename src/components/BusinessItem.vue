<template>
  <b-col xl="3" lg="4" md="6" sm="12">
    <b-card
      :title="business.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-4"
    >
      <b-card-text>{{business.summary}}</b-card-text>

      <b-button href="#" variant="primary">{{business.guid}}</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "BusinessItem",
  props: ["business"]
};
</script>

<style>
</style>