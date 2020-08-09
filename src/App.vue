<template>
  <v-app class="grey">
    <NavBar />
    <v-main class="mx-10 my-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  created() {
    this.$store.dispatch("getProjects");
    this.$store.dispatch("getTeam");
  },
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>
