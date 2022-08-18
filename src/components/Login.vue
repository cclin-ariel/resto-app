<template>
  <img class="logo" src="../assets/LOGO.jpg" alt="logo" />
  <div class="flex flex-col">
    <div class="register">
      <div class="text-gray-700 mx-auto text-3xl">Login</div>
      <input
        class="input"
        type="text"
        v-model="name"
        placeholder="Enter Name"
      />
      <input
        class="input"
        type="text"
        v-model="email"
        placeholder="Enter E-mail"
      />
      <button class="button">Login</button>
      <div class="button">
        <router-link to="/sign-up" class="mx-auto">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
