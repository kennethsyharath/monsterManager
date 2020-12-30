<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-spacer/>
      <router-link class="router-text" to="/">Home</router-link>
      <v-spacer/>
      <router-link class="router-text" to="/about">About</router-link>
      <v-spacer/>
      <router-link class="router-text" to="/editor">Editor</router-link>
      <v-spacer/>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {}
</script>

<style scoped>
    .router-text {
        color: black;
    }
</style>