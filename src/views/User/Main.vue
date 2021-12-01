<template>
  <div class="main-container">
    <UpperDivision />
    <v-container :fluid="fluidState" class="contain-body mt-1">
      <router-view />
    </v-container>
    <div class="footer-height">
      <Footer />
    </div>
  </div>
</template>

<script>
import UpperDivision from "../../components/UpperDivision";
import Footer from "../../components/Footer";
export default {
  name: "contentPage",
  components: {
    UpperDivision,
    Footer,
  },
  data() {
    return {
      fluidState: "",
    };
  },
  created() {
    this.screenCheck();
  },
  mounted() {
    this.screenCheck;
  },
  methods: {
    screenCheck() {
      let windowWidth = window.innerWidth;
      if (windowWidth.value < 550) this.fluidState = true;
      if (windowWidth.value > 549 && windowWidth.value < 1200)
        this.fluidState = true;
      if (windowWidth.value > 1199) this.fluidState = false;
    },
  },
};
</script>

<style lang="scss" scopped>
.footer-height {
  height: 5vh !important;
}

.contain-body {
  height: 85vh !important;
  overflow-y: auto !important;
}

@media only screen and (max-width: 600px) {
  .appbar-hight {
    height: 22vh !important;
  }
  .contain-body {
    height: 82vh !important;
    overflow-y: auto !important;
  }

  .footer-height {
    height: 5vh !important;
  }
}
</style>
