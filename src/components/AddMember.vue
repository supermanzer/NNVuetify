<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text color="grey" v-bind="attrs" v-on="on">
        <v-icon>mdi-account-plus</v-icon>
        <span>Add Member</span>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2">
        Add New Team Member
        <v-spacer></v-spacer>
        <v-btn icon color="grey" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Name"
            v-model="member.name"
            prepend-icon="mdi-rename-box"
            :rules="[inputRules.required]"
          >
          </v-text-field>
          <v-text-field
            label="Role"
            v-model="member.role"
            prepend-icon="mdi-sitemap"
            :rules="[inputRules.required]"
          ></v-text-field>
          <v-text-field
            label="Avatar"
            hint="Path in public folder to image file"
            v-model="member.avatar"
            prepend-icon="mdi-file-image"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          class="mt-3 mx-1"
          :loading="loading"
          @click="submit"
          >Add Member</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import db from "@/fb";

export default {
  components: {},
  data() {
    return {
      dialog: false,
      loading: false,
      member: {
        name: "",
        role: "",
        avatar: "",
      },
      inputRules: {
        required: (v) => !!v || "Required Field",
      },
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        db.collection("members")
          .add(this.member)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("memberAdded");
            this.member = {
              name: "",
              role: "",
              avatar: "",
            };
          });
      }
    },
  },
};
</script>

<style></style>
