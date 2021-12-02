<template>
  <div>
    <v-footer
      elevation="2"
      :fixed="fixedVar"
      class="align-center unrounded-card whiteRow upperShadow"
    >
      <v-layout align-left justify-space-between>
        <p class="caption text-left">
          <a href="#">Privacy Policy</a>
          |
          <a href="#">Terms of Service</a> |
          <a href="#">License agreement</a>
          <v-spacer></v-spacer>
          &copy; EAA incorporation. All rights reserved |
          <a href="#">EEA.com</a>
        </p>
      </v-layout>

      <p class="caption"></p>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      fixedVar: true,
    };
  },
  created() {
    if (this.$vuetify.breakpoint.mdAndUp === true) {
      this.fixedVar = true;
    } else {
      this.fixedVar = false;
    }
  },
};
</script>

<style></style>
