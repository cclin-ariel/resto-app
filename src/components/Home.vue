<template>
  <Header />
  <h1>Hello users, Welcome on Home Page.</h1>
</template>
<script>
import Header from "./header.vue";
export default {
  name: "Home",
  components: { Header },
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
