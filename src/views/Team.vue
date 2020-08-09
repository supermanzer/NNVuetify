<template>
  <div class="Team">
    <v-row>
      <h1 class="subeahding grey--text">Team</h1>
      <v-spacer></v-spacer>
      <AddMember @memberAdded="memberAdded" />
    </v-row>
    <!-- <v-btn class="hidden-md-and-down">click me</v-btn> -->
    <!-- <v-btn class="hidden-md-and-up">Click Me</v-btn> -->
    <!-- <v-btn class="hidden-sm-only">Click Me</v-btn> -->
    <v-container class="my-16 fill-height">
      <v-row>
        <v-col sm="6" md="4" lg="3" v-for="(person, i) in team" :key="i">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="250" :rounded="false" class="grey lighten-2">
                <img :src="person.avatar" alt="" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn bottom text color="grey">
                <v-icon left>mdi-message-text</v-icon>
              </v-btn>
              <span>Message</span>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AddMember from "@/components/AddMember";
export default {
  name: "Team",
  components: {
    AddMember,
  },
  data() {
    return {};
  },
  computed: {
    team() {
      return this.$store.state.team;
    },
  },
  methods: {
    memberAdded() {
      this.$emit("memberAdded");
    },
  },
};
</script>

<style lang="css">
.gd-stuff {
  min-height: 100px;
  background-image: linear-gradient(
    to top,
    #3f51b1 0%,
    #5a55ae 13%,
    #7b5fac 25%,
    #8f6aae 38%,
    #a86aa4 50%,
    #cc6b8e 62%,
    #f18271 75%,
    #f3a469 87%,
    #f7c978 100%
  );
}
</style>
