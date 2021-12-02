<template>
  <div>
    <v-app-bar id="nav" elevation="3" class="pt-1">
      <template>
        <v-app-bar-nav-icon
          @click="drawer = true"
          class="d-flex d-sm-none"
        ></v-app-bar-nav-icon>
        <img
          src="../assets/logos/modern/vh-trans.svg"
          alt="forms-image"
          width="50px"
          height="auto"
          class="logoImag mb-2"
        />
        <v-col cols="12" md="3" lg="3" sm="3" class="text-left">
          <h4 class="header-fonts">Video Hub Platform V.1.0</h4>
          <h6>An interactive e-platform for education</h6>
        </v-col>
        <v-col
          cols="12"
          md="4"
          lg="4"
          sm="12"
          class="text-left mt-3"
          v-show="$vuetify.breakpoint.mdAndUp"
        >
          <v-text-field
            class="small-text"
            label="Search"
            persistent-hint
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
      </template>
    </v-app-bar>

    <!-- Add a navigation bar -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
            <v-icon v-text="item.icon" small></v-icon>
            <v-list-item-content>
              <v-list-item-title class="ps-2">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "firstPage",
  data: function () {
    return {
      drawer: false,
      tab: null,
      items: [
        {
          title: "Main Dashboard",
          icon: "mdi-home",
          route: "/user/dashboard/main",
        },
        {
          title: "Your Videos",
          icon: "mdi-video",
          route: "/user/dashboard/new-record",
        },

        {
          title: "Public Videos",
          icon: "mdi-earth",
          route: "/user/dashboard/display-data",
        },

        {
          title: "Favourite",
          icon: "mdi-heart",
          route: "/user/dashboard/display-data",
        },

        {
          title: "Linked Accounts",
          icon: "mdi-account-multiple",
          route: "/user/dashboard/report-data",
        },
        {
          title: "Video Studio",
          icon: "mdi-pencil",
          route: "/user/dashboard/user-activity",
        },
        {
          title: "Settings",
          icon: "mdi-cog",
          route: "/user/dashboard/user-settings",
        },
      ],
      subitems: [
        { title: "Video Hub" },
        { title: "Digital Examination" },
        { title: "Digital Library" },
        { title: "E-learning School" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.header-fonts {
  font-weight: bold !important;
  color: #d32f2f !important;
}
#nav {
  background: #fff;
  -moz-box-shadow: none;
  -goog-ms-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.logoImag {
  border-radius: 5px !important;
}
.btnStyle {
  background: #fff !important;
  border: none;
  box-shadow: none;
}

.btnStyle:hover {
  background: #fff !important;
  border: none;
  box-shadow: none;
}
.small-text input {
  font-size: 1.2em;
}
</style>
