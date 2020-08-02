<template>
  <div class="home">
    <h1 class="display-4">Home Page</h1>
    <v-btn class="pink white--text" :elevation="4">Click Me</v-btn>
    <p></p>
    <v-btn dark depressed color="deep-purple">Click Me</v-btn>
    <p></p>
    <v-btn text color="pink">Click Me</v-btn>
    <p></p>
    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-comment</v-icon>
      <span>Comment</span>
    </v-btn>
    <p></p>
    <v-btn depressed small class="pink white--text">
      <v-icon left small>mdi-comment</v-icon>
      <span>Comment</span>
    </v-btn>
    <p></p>
    <v-btn depressed large class="pink white--text">
      <span>Comment</span>
      <v-icon right large>mdi-comment</v-icon>
    </v-btn>
    <p></p>
    <v-btn depressed small dark fab color="purple">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
