<template>
  <div class="w-full bg-gray-300">
    <div class="nav">
      <a href="#" class="icon"
        ><img src="../assets/favicon.jpg" alt="icon"
      /></a>
      <a href="#" class="hidden sm:block">home</a>
      <a href="#">add restaurant</a>
      <a href="#">update restaurant</a>
      <a href="#">logout</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",

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
<style lang="postcss" scoped>
.nav {
  @apply w-full sm:w-10/12 md:w-8/12 mx-auto capitalize flex flex-row justify-around py-2 items-center;
}
.icon {
  @apply w-9;
}
</style>
