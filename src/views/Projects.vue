<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-16 fill-height">
      <v-row justify-center>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="project in myProjects" :key="project.id">
            <v-expansion-panel-header>
              <div class="title" v-text="project.title">Project Title</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="px-4 grey--text text--darken-3">
              <div class="font-weight-bold">Due By: {{ project.due }}</div>
              <div class="mt-1" v-text="project.content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate autem repellendus natus architecto tempore ipsum earum
                enim possimus sunt, quos neque asperiores cum consequatur ipsam
                quis ducimus quidem nihil porro!
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
  components: {},
  data() {
    return {};
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Supermanzer";
      });
    },
  },
};
</script>
