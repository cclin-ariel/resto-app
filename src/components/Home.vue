<template>
  <Header />
  <router-view />
  <div>Hello {{ userName }}, Welcome on Home Page.</div>
</template>
<script>
import Header from "./HomeComponent/Header.vue";
export default {
  name: "Home",
  components: { Header },
  data() {
    return {
      userName: "",
    };
  },

  mounted() {
    let user = localStorage.getItem("restoApp-userInfo");
    this.userName = JSON.parse(user)[0].name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },

  methods: {},
};
</script>
