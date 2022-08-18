<template>
  <img class="logo" src="../assets/LOGO.jpg" alt="logo" />
  <div class="flex flex-col">
    <div class="register">
      <div class="text-gray-700 mx-auto text-3xl">Sign Up</div>
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
      <input
        class="input"
        type="password"
        v-model="password"
        placeholder="Enter Password"
      />
      <button class="button" @click="signUp">Sign Up</button>
      <div class="button">
        <router-link to="/resto-login" class="mx-auto">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  mounted() {
    let user = localStorage.getItem("restoApp-userInfo");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },

  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        // data created
        localStorage.setItem("restoApp-userInfo", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
