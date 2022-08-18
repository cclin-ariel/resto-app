<template>
  <h1>Hello users, Welcome on Home Page.</h1>
</template>
<script>
export default {
  name: "Home",

  data() {
    return {};
  },

  mounted() {
    let user = localStorage.getItem("restoApp-userInfo");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },

  methods: {},
};
</script>
