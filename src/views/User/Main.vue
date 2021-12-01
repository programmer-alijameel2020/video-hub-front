<template>
  <div class="main-container">
    <UpperDivision />
    <v-container :fluid="fluidState" class="contain-body mt-1">
      <v-row>
        <v-col
          cols="12"
          class="sidebar"
          v-show="this.$vuetify.breakpoint.mdAndUp"
        >
          <Sidebar />
        </v-col>
        <v-col cols="12" md="10" sm="12" lg="10">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
    <div class="footer-height">
      <Footer />
    </div>
  </div>
</template>

<script>
import UpperDivision from "../../components/UpperDivision";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar.vue";
export default {
  name: "contentPage",
  components: {
    UpperDivision,
    Footer,
    Sidebar,
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
.sidebar {
  max-width: 10%;
}

.footer-height {
  height: 5vh !important;
}

.contain-body {
  height: 85vh !important;
  overflow-y: auto !important;
}

@media only screen and (max-width: 1300px) {
  .sidebar {
    max-width: 20%;
  }
}

@media only screen and (max-width: 1026px) {
  .sidebar {
    max-width: 20%;
  }
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
