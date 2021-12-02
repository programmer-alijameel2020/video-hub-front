<template>
  <div>
    <v-app-bar id="nav" elevation="3" class="pt-1 pb-2">
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
        <v-col
          cols="12"
          md="3"
          lg="3"
          sm="3"
          class="text-left"
          v-show="$vuetify.breakpoint.mdAndUp"
        >
          <h4 class="header-fonts">Video Hub Platform V.1.0</h4>
          <h6>An interactive e-platform for education</h6>
        </v-col>
        <v-col
          cols="12"
          md="4"
          lg="4"
          sm="4"
          class="text-left mt-3"
          v-show="$vuetify.breakpoint.mdAndUp"
        >
          <v-text-field
            class="small-text mt-3"
            label="Search"
            persistent-hint
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="5" lg="5" sm="5" class="text-left mt-0 pt-1">
          <v-icon class="ms-3 circular pa-2">mdi-bell</v-icon>
          <v-icon
            v-show="$vuetify.breakpoint.mdAndDown"
            class="ms-3 circular pa-2"
            >mdi-magnify</v-icon
          >
          <v-avatar
            class="ms-3"
            size="40px"
            v-show="$vuetify.breakpoint.smOnly"
          >
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="UserProfile"
            />
          </v-avatar>

          <v-menu
            transition="slide-y-transition"
            bottom
            offset-y
            :rounded="rounded"
            v-show="$vuetify.breakpoint.mdAndUp"
          >
            <template v-slot:activator="{ on, attrs }">
              <button
                v-show="$vuetify.breakpoint.mdAndUp"
                class="profile-button cut-text"
                data-toggle="dropdown"
                v-bind="attrs"
                v-on="on"
              >
                <v-avatar size="26px">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    width="20px"
                    height="auto"
                    alt="John"
                  />
                </v-avatar>
                <span class="user-title">
                  username@vh <v-icon>mdi-chevron-down</v-icon></span
                >
              </button>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title
                  class="text-left ps-2 list-item-style d-none d-md-block red-text"
                  >user@vh.org</v-list-item-title
                >
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item v-for="(item, i) in dropdownItems" :key="i">
                <v-list-item-title
                  class="text-left ps-2 list-item-style d-none d-md-block"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
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

      dropdownItems: [
        {
          title: "Settings",
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

.circular {
  border-radius: 50%;
  border: 1px solid #37474f;
  color: #37474f !important;
}

.profile-button {
  border: 1px solid #37474f;
  padding: 0.5em;
  padding-left: 0.7em;
  padding-right: 0.9em;
  margin-left: 0.9em;
  border: 1.3px solid #37474f;
  color: #37474f;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}

.red-text {
  color: #e53935;
}

.user-title {
  font-size: 14px !important;
  font-weight: normal !important;
}

@media only screen and (max-width: 600px) {
}
</style>
