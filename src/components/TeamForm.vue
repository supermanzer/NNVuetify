<template> </template>

<script>
export default {
  props: {
    member: { type: Object, required: true, default: this.emptyMember },
  },
  data() {
    return {};
  },
  methods: {
    emptyMember() {
      return {};
    },
  },
};
</script>

<style></style>
