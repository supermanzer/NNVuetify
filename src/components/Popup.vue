<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text dark v-bind="attrs" v-on="on">
          New Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Add a New Project
          <v-spacer></v-spacer>
          <v-btn icon color="grey" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="project.title"
              prepend-icon="mdi-folder"
              :rules="[inputRules.required, inputRules.minLength]"
              counter
            ></v-text-field>

            <v-textarea
              label="Information"
              v-model="project.content"
              prepend-icon="mdi-pencil"
              counter
              :rules="[inputRules.required, inputRules.contentMinLength]"
            ></v-textarea>
            <v-select
              :rules="[inputRules.required]"
              :items="statusOptions"
              label="Status"
              prepend-icon="mdi-list-status"
              v-model="project.status"
            ></v-select>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  label="Due Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :value="formattedDate"
                  :rules="[inputRules.required]"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="project.dueDate"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            class="mx-0 mt-3"
            @click="submit"
            :loading="loading"
          >
            Create Project
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import db from "@/fb";
export default {
  data() {
    return {
      dialog: false,
      menu2: false,
      project: {
        title: "",
        content: "",
        dueDate: "",
        status: "",
      },
      inputRules: {
        minLength: (v) => v.length >= 3 || "Minimum length is 3 characters",
        contentMinLength: (v) =>
          v.length >= 20 || "Minimum length is 20 characters",
        required: (v) => !!v || "Required Field",
      },
      statusOptions: ["todo", "ongoing", "complete", "overdue"],
      loading: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.project.title,
          content: this.project.content,
          due: format(parseISO(this.project.dueDate), "do MMM yyyy"),
          person: "Supermanzer",
          status: this.project.status,
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectAdded");
            this.project = {
              title: "",
              content: "",
              dueDate: "",
              status: "",
            };
          });
      }
    },
  },
  computed: {
    formattedDate() {
      return this.project.dueDate
        ? format(parseISO(this.project.dueDate), "do MMM yyyy")
        : "";
    },
  },
};
</script>

<style></style>
