<template>
  <div class="Dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <!-- <v-btn class="hidden-md-and-down">click me</v-btn> -->
    <!-- <v-btn class="hidden-md-and-up">Click Me</v-btn> -->
    <!-- <v-btn class="hidden-sm-only">Click Me</v-btn> -->
    <v-container class="my-12">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              small
              text
              color="grey"
              @click="sortBy('title')"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By Project name</span>
            </v-btn>
          </template>
          <span>Sort by Project Name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              small
              text
              color="grey"
              @click="sortBy('person')"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>

          <span>Sort by Person</span>
        </v-tooltip>
      </v-row>
      <v-card flat v-for="(project, i) in projects" :key="i">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col sm="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col sm="6" md="4" lg="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col sm="6" md="4" lg="2">
            <div class="caption grey--text">Due By</div>
            <div>{{ project.dueDate }}</div>
          </v-col>
          <v-col sm="6" md="4" lg="2">
            <div class="right">
              <v-chip :class="`${project.status} white--text caption`">{{
                project.status
              }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      projects: [
        {
          person: "Supermanzer",
          title: "Create a brand new website",
          dueDate: "Sept 1, 2020",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque dicta architecto similique corrupti totam omnis optio sapiente, molestiae dignissimos ducimus quos eos soluta aspernatur provident quibusdam tempora temporibus iusto.",
        },
        {
          person: "Supermanzer",
          title: "Learn how to use Vuetify",
          dueDate: "Aug 1, 2020",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque dicta architecto similique corrupti totam omnis optio sapiente, molestiae dignissimos ducimus quos eos soluta aspernatur provident quibusdam tempora temporibus iusto.",
        },
        {
          person: "Supermanzer",
          title: "Redesign the MPS UI",
          dueDate: "Oct 1, 2020",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque dicta architecto similique corrupti totam omnis optio sapiente, molestiae dignissimos ducimus quos eos soluta aspernatur provident quibusdam tempora temporibus iusto.",
        },
        {
          person: "Joel",
          title: "Interface with MPS UI",
          dueDate: "Dec 1, 2020",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque dicta architecto similique corrupti totam omnis optio sapiente, molestiae dignissimos ducimus quos eos soluta aspernatur provident quibusdam tempora temporibus iusto.",
        },
      ],
    };
  },
  methods: {
    sortBy(property) {
      this.projects.sort((a, b) => (a[property] < b[property] ? -1 : 1));
    },
  },
};
</script>

<style lang="css">
.project.complete {
  border-left: 4px solid #06af23;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid red;
}
.v-chip.complete {
  background: #06af23 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: red !important;
}
</style>
