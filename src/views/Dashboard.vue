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
      <v-card
        flat
        v-for="project in projects"
        :key="project.id"
        :class="`ma-1 project ${project.status}`"
      >
        <v-row class="pa-2">
          <v-col sm="12" md="6" lg="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col sm="6" md="4" lg="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col sm="6" md="4" lg="2">
            <div class="caption grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col sm="6" md="4" lg="1">
            <v-chip
              :class="`${project.status} white--text caption text-uppercase`"
              >{{ project.status }}</v-chip
            >
          </v-col>
          <v-col sm="6" md="4" lg="1" align="right">
            <v-menu bottom left y-offset>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon text v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(action, i) in actions"
                  :key="i"
                  @click="action.function"
                >
                  <v-list-item-icon>
                    <v-icon :color="action.color" v-text="action.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title v-text="action.name"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// import db from "@/fb";
export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      actions: [
        {
          name: "Edit",
          icon: "mdi-file-document-edit-outline",
          color: "warning",
          function: this.logClick,
        },
        {
          name: "Delete",
          icon: "mdi-delete-alert",
          color: "error",
          function: this.logClick,
        },
      ],
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },

  methods: {
    sortBy(property) {
      this.projects.sort((a, b) => (a[property] < b[property] ? -1 : 1));
    },
    logClick(e) {
      console.log(`Link was clicked: ${e}`);
    },
  },
};
</script>

<style lang="css">
.project.todo {
  border-left: 4px solid grey;
}
.project.completed {
  border-left: 4px solid #06af23;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid red;
}
.v-chip.todo {
  background: grey;
}
.v-chip.completed {
  background: #06af23 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: red !important;
}
</style>
