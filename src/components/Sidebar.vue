<template>
  <v-list dense right class="mt-2 pa-md-2 px-md-3 pa-0 text-left transparent">
    <v-list-item-group v-model="selectedItem">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        class="mb-2"
        :to="item.route"
        color="blue darken-3"
      >
        <v-icon v-text="item.icon" small></v-icon>
        <v-list-item-content class="text-left">
          <v-list-item-title
            v-text="item.title"
            class="text-left ps-2 list-item-style d-none d-md-block"
          ></v-list-item-title>
        </v-list-item-content>
        <!--      <v-list-item-icon></v-list-item-icon> -->
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<style lang="scss" scopped>
.list-item-style {
  font-size: 14px !important;
  font-weight: normal !important;
}
</style>
<script>
import { /* mapGetters ,*/ mapActions } from "vuex";

export default {
  name: "AppSideBar",
  role: "",
  data() {
    return {
      drawer: true,
      selectedItem: 0,
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
      mini: false,
    };
  },

  computed: {
    /* ...mapGetters(["authenticated"]), */
  },
  methods: {
    ...mapActions(["signout"]),
    roleCheck(role) {
      if (role == "superadmin") {
        this.items = [
          {
            title: "الرئيسية",
            icon: "mdi-home",
            route: "/user/dashboard/main",
          },
          {
            title: "شكاوي التنظيم الاعلامي",
            icon: "mdi-satellite-uplink",
            route: "/user/dashboard/complaint",
          },
          {
            title: "شكاوي  تنظيم الاتصالات",
            icon: "mdi-transmission-tower",
            route: "/user/dashboard/complaint-communications",
          },
          {
            title: "أرشيف الرسائل النصية SMS",
            icon: "mdi-message-alert-outline",
            route: "/user/dashboard/sms-archive",
          },
          {
            title: "التقارير",
            icon: "mdi-poll",
            route: "/user/dashboard/userReports",
          },
          {
            title: "معلومات الحساب",
            icon: "mdi-file-account",
            route: "/user/dashboard/userInfo",
          },
        ];
      } else if (role == "media") {
        this.items = [
          {
            title: "الرئيسية",
            icon: "mdi-desktop-mac-dashboard",
            route: "/user/dashboard/main",
          },
          {
            title: "شكاوي التنظيم الاعلامي",
            icon: "mdi-file-document",
            route: "/user/dashboard/complaint",
          },
          {
            title: "معلومات الحساب",
            icon: "mdi-file-account",
            route: "/user/dashboard/userInfo",
          },
        ];
      } else if (role == "voc") {
        this.items = [
          {
            title: "الرئيسية",
            icon: "mdi-desktop-mac-dashboard",
            route: "/user/dashboard/main",
          },
          {
            title: "شكاوي  تنظيم الاتصالات",
            icon: "mdi-file-document",
            route: "/user/dashboard/complaint-communications",
          },
          {
            title: "قائمة الارقام الممنوعة",
            icon: "mdi-file-cancel",
            route: "/user/dashboard/block-list",
          },
          {
            title: "أرشيف الرسائل النصية SMS",
            icon: "mdi-message-alert-outline",
            route: "/user/dashboard/sms-archive",
          },
          {
            title: "التقارير",
            icon: "mdi-poll",
            route: "/user/dashboard/userReports",
          },
          {
            title: "معلومات الحساب",
            icon: "mdi-file-account",
            route: "/user/dashboard/userInfo",
          },
        ];
      } else if (role == "zain") {
        this.items = [
          {
            title: "الرئيسية",
            icon: "mdi-desktop-mac-dashboard",
            route: "/user/dashboard/main",
          },
          {
            title: "شكاوي  تنظيم الاتصالات",
            icon: "mdi-file-document",
            route: "/user/dashboard/complaint-communications",
          },
          {
            title: "التقارير",
            icon: "mdi-poll",
            route: "/user/dashboard/userReports",
          },
          {
            title: "معلومات الحساب",
            icon: "mdi-file-account",
            route: "/user/dashboard/userInfo",
          },
        ];
      } else if (role == "asiacell") {
        this.items = [
          {
            title: "الرئيسية",
            icon: "mdi-desktop-mac-dashboard",
            route: "/user/dashboard/main",
          },
          {
            title: "شكاوي  تنظيم الاتصالات",
            icon: "mdi-file-document",
            route: "/user/dashboard/complaint-communications",
          },
          {
            title: "التقارير",
            icon: "mdi-poll",
            route: "/user/dashboard/userReports",
          },
          {
            title: "معلومات الحساب",
            icon: "mdi-file-account",
            route: "/user/dashboard/userInfo",
          },
        ];
      } else if (role == "korek") {
        this.items = [
          {
            title: "الرئيسية",
            icon: "mdi-desktop-mac-dashboard",
            route: "/user/dashboard/main",
          },
          {
            title: "شكاوي  تنظيم الاتصالات",
            icon: "mdi-file-document",
            route: "/user/dashboard/complaint-communications",
          },
          {
            title: "التقارير",
            icon: "mdi-poll",
            route: "/user/dashboard/userReports",
          },
          {
            title: "معلومات الحساب",
            icon: "mdi-file-account",
            route: "/user/dashboard/userInfo",
          },
        ];
      } else {
        this.items = [];
      }
    },
  },

  created() {
    /* this.fullname = this.authenticated.fullname;
    this.role = this.authenticated.role;
    this.roleCheck(this.role); */
  },
};
</script>
