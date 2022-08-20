<template>
  <div class="w-full bg-gray-300">
    <div class="nav container">
      <router-link to="/" class="icon"
        ><img src="@/assets/favicon.jpg" alt="icon"
      /></router-link>
      <router-link to="/" class="hidden sm:block nav-item">home</router-link>
      <router-link to="/add-resto" class="nav-item">add restaurant</router-link>
      <router-link to="/update-resto" class="nav-item"
        >update restaurant</router-link
      >
      <button class="nav-item capitalize" @click="logout">logout</button>
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

  methods: {
    logout() {
      //   this.logoutMsg = true;
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style lang="postcss" scoped>
.nav {
  @apply mx-auto capitalize flex flex-row justify-around py-2 items-center;
}
.icon {
  @apply w-9;
}
.nav-item {
  @apply text-gray-700 hover:text-gray-50 text-lg;
}
</style>
