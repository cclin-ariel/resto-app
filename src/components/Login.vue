<template>
  <img class="logo" src="../assets/LOGO.jpg" alt="logo" />
  <div class="box">
    <div class="register">
      <div class="pageTitle">Login</div>
      <input type="text" v-model="email" placeholder="Enter E-mail" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button @click="login">Login</button>
      <button>
        <router-link to="/sign-up">Sign Up</router-link>
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
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
    async login() {
      await axios
        .get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )
        .then((result) => {
          // console.table(result.data);
          if (result.data.length == 0) return;
          localStorage.setItem(
            "restoApp-userInfo",
            JSON.stringify(result.data),
            console.log("login success")
          );
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
