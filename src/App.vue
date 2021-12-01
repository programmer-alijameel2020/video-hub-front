<template>
  <v-app>
    <v-main class="back">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.back {
  background-color: #fafafa !important;
}
</style>
