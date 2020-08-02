<template>
  <nav>
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
      <v-btn text color="grey lighten-2">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dark class="grey darken-2">
      <v-list>
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
export default {
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
    };
  },
};
</script>

<style></style>
