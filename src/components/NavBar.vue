<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="">
      <span class="green--text text--darken-1 font-weight-bold"
        >Awesome! You've added a new project</span
      >
      <v-btn text color="success">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-app-bar
      app
      flat
      dark
      src="https://w.wallhaven.cc/full/4v/wallhaven-4vjqdl.png"
    >
      <v-app-bar-nav-icon
        class="grey--text text--lighten-2"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text text--lighten-2 mx-10">
        <span class="font-weight-light">ToDo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- DROPDOWN MENU -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, k) in items"
            :key="k"
            router
            :to="item.route"
          >
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- END DROPDOWN MENU -->
      <v-btn text color="grey lighten-2">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dark class="grey darken-2 py-3">
      <v-row class="mt-5" align="center" justify="center">
        <v-col large="12" align="center">
          <v-avatar size="150">
            <img src="/avatar_images/ryan.jpeg" alt="" srcset="" />
          </v-avatar>
        </v-col>
        <v-col large="12" align="center">
          <p class="white--text subheading mt-2">
            Supermanzer
          </p>
        </v-col>
      </v-row>
      <v-row align="center" class=" mt-4 mb-3 ">
        <v-col align="Center">
          <Popup @projectAdded="notifyProjectAdd" />
        </v-col>
      </v-row>
      <v-list class="mt-10">
        <v-list-item-group color="blue lighten-3">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";
export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-view-dashboard",
          text: "Dashboard",
          route: "/",
        },
        {
          icon: "mdi-folder",
          text: "My Projects",
          route: "/projects",
        },
        {
          icon: "mdi-account-multiple",
          text: "Team",
          route: "/team",
        },
      ],
      snackbar: false,
      snackText: "",
    };
  },
  methods: {
    notifyProjectAdd() {
      this.snackText = `You've added a new project!`;
      this.snackbar = true;
    },
  },
};
</script>

<style></style>
