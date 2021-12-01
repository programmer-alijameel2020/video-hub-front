<template>
  <div>
    <v-app-bar id="nav" elevation="3" class="pt-1">
      <template>
        <v-app-bar-nav-icon
          @click="drawer = true"
          class="d-flex d-sm-none"
        ></v-app-bar-nav-icon>
        <v-col cols="3" md="1" lg="1" class="text-right">
          <img
            src="../assets/logos/logo22.svg"
            alt="forms-image"
            width="50px"
            height="auto"
            class="logoImag"
          />
        </v-col>
        <v-col cols="12" md="3" lg="3" sm="12" class="text-left">
          <h4 class="header-fonts">Electronic Education Arts</h4>
          <h6>All in one platfrom that innovate the future</h6>
        </v-col>
        <v-spacer></v-spacer>
        <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex">
          <v-tabs-slider color="#D90429"></v-tabs-slider>
          <v-tab v-for="(item, i) in items" :key="i" :to="item.route">
            <div v-if="item.id != 2">{{ item.name }}</div>
            <div v-if="item.id == 2">
              <v-menu transition="slide-y-transition" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">{{ item.name }}</span>
                </template>
                <v-list>
                  <v-list-item v-for="(item, i) in subitems" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
      </template>
    </v-app-bar>

    <!-- Add a navigation bar -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
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
          id: 1,
          name: "Home",
          route: "firstPage",
        },

        {
          id: 2,
          name: "Services",
          route: "",
        },

        {
          id: 3,
          name: "Pricing",
          route: "",
        },

        {
          id: 4,
          name: "Clientes",
          route: "",
        },

        {
          id: 5,
          name: "Sign-in",
          route: "contact",
        },

        {
          id: 6,
          name: "About and Contact",
          route: "about",
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
</style>
